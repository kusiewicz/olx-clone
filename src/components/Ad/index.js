import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Ad = ({ title, image, location, price, onClick }) => {
  console.log('esas');
  return (
    <div className={`rel ${styles.adContainer}`}>
      <div className={styles.image}>
        <img alt={title} src={image} />
      </div>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
      <span className={styles.location}>{location}</span>
      <span className={styles.price}>{`${price} zł`}</span>
      <i
        role="presentation"
        className={`icon-heart-empty ${styles.icon}`}
        onClick={() => onClick()}
      />
    </div>
  );
};

Ad.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};

export default Ad;
