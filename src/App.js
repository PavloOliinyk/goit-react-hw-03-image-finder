import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
// import Loader from "./Loader";
import Button from './Button';
import Modal from './Modal';
import ImageApi from './api/imageApi';
import s from './App.module.css';

const image = new ImageApi();

class App extends Component {
  state = {
    images: [],
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state && this.state.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  modalToggle = e => {
    console.log(e.target);
    this.setState(({ showModal, modalImage }) => ({
      showModal: !showModal,
      modalImage: e.target.dataset.src || e.target.src,
    }));
  };

  handleSumbit = value => {
    image.resetPage();
    image.query = value;
    image.fetchImageOrPhoto().then(images => this.setState({ images }));
    image.incrementpage();
  };

  loadMoreImages = () => {
    image.fetchImageOrPhoto().then(newImages => {
      if (!newImages.length) {
        return;
      }

      this.setState(({ images }) => {
        return {
          images: [...images, ...newImages],
        };
      });
    });
    image.incrementpage();
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSumbit} />
        {this.state.images.length > 1 && (
          <>
            <ImageGallery
              images={this.state.images}
              onModalClick={this.modalToggle}
            />
            <Button onSearch={this.loadMoreImages} />
          </>
        )}
        {/* <Loader /> */}

        {this.state.showModal && (
          <Modal
            largeImg={this.state.modalImage}
            onModalClick={this.modalToggle}
          />
        )}
      </div>
    );
  }
}

export default App;
