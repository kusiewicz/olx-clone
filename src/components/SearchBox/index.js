import React from 'react';
import propTypes from 'prop-types';

const SearchBox = ({ className, placeholder, value, onChange }) => (
  <input
    type="text"
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

SearchBox.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
};

export default SearchBox;
