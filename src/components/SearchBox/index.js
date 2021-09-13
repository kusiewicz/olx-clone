import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.scss';

const SearchBox = ({ className, text }) => (
  <input type="text" className={`${styles.search} ${className}`} placeholder={text} />
);

SearchBox.propTypes = {
  className: propTypes.string,
  text: propTypes.string,
};

export default SearchBox;
