import React, {useState} from "react";

function SearchBar(props){

  const [term, setTerm] = useState("");

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
