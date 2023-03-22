import React, {useState} from "react";

//searchbar function using the ontermsubmit juction passed from the youtube.js
function SearchBar(props){

  // define the state term and initialse it as an empty string
  const [term, setTerm] = useState("");

  // form components returned
    return (
      <div className="container-fluid">
        <form className="form-inline" onSubmit={props.onTermSubmit}>
          <div className="form-group mb-2">
            <label for="searchBar" className="sr-only">
              Youtube search
            </label>
            <input
              className="form-control"
              placeholder='Enter your keyword and then press "Enter"'
              type="text"
              value={term}
              // the setTerm updates the term state in the ontermsubmit in the api request in the youtube.js
              onChange={(e) => setTerm({ term: e.target.value })}
            />
            <small className="form-text text-muted">
              Find a video about your chosen activity
            </small>
          </div>
        </form>
      </div>
    );
  }


export default SearchBar;
