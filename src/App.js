import { Component } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Modal from './Modal';
import ImageApi from './api/imageApi';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const image = new ImageApi();

class App extends Component {
  state = {
    query: '',
    images: [],
    currentPage: 1,
    totalImages: null,
    showModal: false,
    modalImage: '',
    modalAltText: '',
    showLoader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ showLoader: true });

      image
        .fetchImageOrPhoto(this.state.query, this.state.currentPage)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            toast.error('Enter proper query', { theme: 'colored' });
          }

          this.setState(({ images }) => {
            return {
              images: [...images, ...hits],
              totalImages: totalHits,
            };
          });
        })
        .catch(error => {
          this.setState({ error });
          toast.error(this.state.error.message, { theme: 'colored' });
        })
        .finally(() => {
          if (prevState.images.length > 11) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }

          this.setState({ showLoader: false });
        });
    }
  }

  modalToggle = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImage: !showModal ? e.target.dataset.src : '',
      modalAltText: !showModal ? e.target.alt : '',
    }));
  };

  handleSumbit = value => {
    if (value === '') {
      toast.error('No query entered yet...', { theme: 'colored' });
      return;
    }
    this.setState({ query: value, images: [], currentPage: 1 });
  };

  loadMoreImages = e => {
    e.preventDefault();

    if (this.state.images.length === this.state.totalImages) {
      toast.error('There is no more images to show', { theme: 'colored' });
      return;
    }

    this.setState(({ currentPage }) => ({ currentPage: currentPage + 1 }));
  };

  render() {
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.handleSumbit} />

          {this.state.images.length > 1 && (
            <>
              <ImageGallery
                images={this.state.images}
                onModalClick={this.modalToggle}
              />
              {!this.state.showLoader && (
                <Button onSearch={this.loadMoreImages} />
              )}
            </>
          )}
          {this.state.showLoader && (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
              style={{ textAlign: 'center' }}
            />
          )}

          {this.state.showModal && (
            <Modal
              modalImage={this.state.modalImage}
              modalAltText={this.state.modalAltText}
              onModalClick={this.modalToggle}
            />
          )}
        </div>
        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </>
    );
  }
}

export default App;
