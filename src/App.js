import { Component } from "react";
import Loader from "react-loader-spinner";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
// import Loader from "./Loader";
import Button from "./Button";
import Modal from "./Modal";
import ImageApi from "./api/imageApi";
import s from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const image = new ImageApi();

class App extends Component {
  state = {
    query: "",
    images: [],
    showModal: false,
    modalImage: "",
    modalAltText: "",
    showLoader: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      console.log(this.state.showLoader);
      this.setState({ showLoader: true });
      image.resetPage();
      image.query = this.state.query;
      image.fetchImageOrPhoto().then((images) => {
        this.setState({ showLoader: true });
        this.setState({ images });
      });
      image.incrementpage();

      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   behavior: "smooth"
      // });
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
    // this.setState({ showLoader: true });
    this.setState({ query: value });
    // image.resetPage();
    // image.query = value;
    // image
    //   .fetchImageOrPhoto()
    //   .then((images) => this.setState({ images, showLoader: false }));
    // image.incrementpage();
  };

  loadMoreImages = () => {
    image.fetchImageOrPhoto().then((newImages) => {
      if (!newImages.length) {
        return;
      }

      this.setState(({ images }) => {
        return {
          images: [...images, ...newImages]
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
              query={this.state.query}
              image={image}
            />
            <Button onSearch={this.loadMoreImages} />
          </>
        )}

        {this.state.showModal && (
          <Modal
            modalImage={this.state.modalImage}
            modalAltText={this.state.modalAltText}
            onModalClick={this.modalToggle}
          />
        )}
        {this.state.showLoader && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            style={{ textAlign: "center" }}
          />
        )}
      </div>
    );
  }
}

export default App;
