import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Category = ({ category, image }) => (
  <div className={styles.container}>
    <img alt={category} className={styles.image} src={`${image}`} />
    <a href="placeholder" className={styles.caption}>
      {category}
    </a>
  </div>
);

Category.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
};

export default Category;
