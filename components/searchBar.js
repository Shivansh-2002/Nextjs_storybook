// components/SearchBar.js
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ color, size }) => {
  const styles = {
    backgroundColor: color,
    fontSize: size,
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      style={styles}
    />
  );
};

SearchBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

SearchBar.defaultProps = {
  color: 'white',
  size: '16px',
};

export default SearchBar;