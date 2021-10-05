import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.ImageGallery} onClick={this.props.onModalClick}>
        {this.props.images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            modalImage={largeImageURL}
            description={tags.split(',')[0]}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
