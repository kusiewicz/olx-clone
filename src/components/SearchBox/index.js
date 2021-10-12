import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SearchBox = ({ boxClassName, inputClassName, value, placeholder, setText, children }) => (
  <div className={`flex cntr ${boxClassName}`}>
    {children}
    <input
      value={value}
      className={inputClassName}
      placeholder={placeholder}
      onChange={({ target }) => setText(target.value)}
    />
    {value && (
      <i
        className={`${styles.cancelIcon}`}
        role="button"
        tabIndex={0}
        aria-label="Wyczyść pole wyszukiwania"
        onClick={() => setText('')}
      />
    )}
  </div>
);

SearchBox.propTypes = {
  boxClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setText: PropTypes.func,
  children: PropTypes.node,
};

export default SearchBox;
