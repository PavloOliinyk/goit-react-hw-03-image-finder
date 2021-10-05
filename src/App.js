import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";
// import Loader from "./Loader";
import Button from "./Button";
// import Modal from "./Modal";
import ImageApi from "./api/imageApi";
import s from "./App.module.css";

const image = new ImageApi();

class App extends Component {
  state = {
    images: []
  };

  handleSumbit = (value) => {
    image.resetPage();
    image.query = value;
    image.fetchImageOrPhoto().then((images) => this.setState({ images }));
    image.incrementpage();
  };

  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }

  loadMoreImages = () => {
    image.fetchImageOrPhoto().then((newImages) =>
      this.setState(({ images }) => {
        return {
          images: [...images, ...newImages]
        };
      })
    );
    image.incrementpage();
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSumbit} />
        {this.state.images.length > 1 && (
          <ImageGallery images={this.state.images} />
        )}
        {/* <Loader /> */}
        <Button onSearch={this.loadMoreImages} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
