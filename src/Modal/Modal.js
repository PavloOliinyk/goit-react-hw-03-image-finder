import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onModalClick();
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.props.onModalClick}>
        <div className={s.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
