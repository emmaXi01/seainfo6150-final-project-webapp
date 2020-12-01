import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [newText, setNewText] = useState('');

  const searchResult = () => {
    if(newText) {
      props.onSearch(newText);
      setNewText('');
    }
  };

  const onTextChange = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div>
      <input className={styles.input} placeholder="Search for course" onChange={onTextChange} value={newText} />
      <button className={styles.searchButton} onClick={searchResult}>search</button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
