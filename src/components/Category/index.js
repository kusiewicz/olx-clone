import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Category = ({ category, src, className, onClick }) => {
  console.log('category rendered');
  return (
    <>
      <div
        className={styles.CategoryContainer}
        role="button"
        aria-label="Pokaż kategorię"
        onClick={onClick}
        tabIndex={0}
      >
        <img alt={category} className={`${className}`} src={src} />
        <a href="placeholder" className={styles.caption}>
          {category}
        </a>
      </div>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Category;
