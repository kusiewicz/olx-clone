import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Category = ({ category, src, className, onClick }) => (
  <>
    <div
      className={styles.CategoryContainer}
      role="button"
      onClick={onClick}
      aria-label="Pokaż kategorię"
      name="Pokaż kategorię"
      tabIndex={0}
    >
      <img alt={category} className={`${className}`} src={src} />
      <span className={styles.caption}>{category}</span>
    </div>
  </>
);

Category.propTypes = {
  category: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Category;
