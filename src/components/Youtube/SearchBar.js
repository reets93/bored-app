import React from "react";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.passingFunction(this.state.term);
  };

  render() {
    return (
      <div className="container-fluid">
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <div className="form-group mb-2">
            <label for="searchBar" className="sr-only">
              Youtube search
            </label>
            <input
              className="form-control"
              placeholder='Enter your keyword and then press "Enter"'
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <small className="form-text text-muted">
              Find a video about your chosen activity
            </small>

            {/* <button className='btn-light 'onClick={this.onFormSubmit}> Search<FaSearch/></button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
