import { Component } from "react";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
import Button from "./Button";
import Modal from "./Modal";
import ImageApi from "./api/imageApi";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const image = new ImageApi();

class App extends Component {
  state = {
    query: "",
    images: [],
    showModal: false,
    modalImage: "",
    modalAltText: "",
    showLoader: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ showLoader: true });
      image.resetPage();
      image.query = this.state.query;
      image
        .fetchImageOrPhoto()
        .then((images) => {
          if (!images.length) {
            toast.info("Enter proper query");
          }
          this.setState({ images });
        })
        .catch((error) => {
          this.setState({ error });
          toast.error(this.state.error.message);
        })
        .finally(() => this.setState({ showLoader: false }));
      image.incrementpage();
    }
  }

  modalToggle = (e) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImage: !showModal ? e.target.dataset.src : "",
      modalAltText: !showModal ? e.target.alt : ""
    }));
  };

  handleSumbit = (value) => {
    this.setState({ query: value, images: [] });
  };

  loadMoreImages = () => {
    this.setState({ showLoader: true });
    image
      .fetchImageOrPhoto()
      .then((newImages) => {
        if (!newImages.length) {
          toast.warn("No more images to show");
          return;
        }

        this.setState(({ images }) => {
          return {
            images: [...images, ...newImages]
          };
        });
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
        this.setState({ showLoader: false });
      });

    image.incrementpage();
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
              style={{ textAlign: "center" }}
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
        <ToastContainer />
      </>
    );
  }
}

export default App;
