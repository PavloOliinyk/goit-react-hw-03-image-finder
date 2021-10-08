import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button type="button" className={s.Button} onClick={this.props.onSearch}>
        Load more
      </button>
    );
  }
}

export default Button;
