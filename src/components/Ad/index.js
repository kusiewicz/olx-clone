import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Ad = ({ title, image, location, price, onClick }) => (
  <div className={`rel ${styles.adContainer}`}>
    <div className={`rel ${styles.imageWrapper}`}>
      <a href="www.placeholder">
        <img alt={title} src={image} />
        <span className={styles.delivery} />
      </a>
    </div>
    <a href="www.placeholder">
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
    </a>
    <span className={styles.location}>{location}</span>
    <span className={styles.price}>{`${price} zł`}</span>
    <div className={styles.favouriteWrapper}>
      <span className={styles.tooltip} tooltiptext="Obserwuj" />
      <i className={`icon-heart-empty ${styles.icon}`} onClick={() => onClick()} />
    </div>
  </div>
);

Ad.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};

export default Ad;
