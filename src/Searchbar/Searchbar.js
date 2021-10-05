import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: ""
  };

  handleChahge = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            name="query"
            // autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChahge}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;