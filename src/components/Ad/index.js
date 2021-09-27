import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Ad = ({ title, image, location, price, onClick }) => {
  console.log('esas');
  return (
    <div className={`rel ${styles.adContainer}`}>
      <div className={`rel ${styles.imageWrapper}`}>
        <img alt={title} src={image} />
        <span className={styles.delivery} />
      </div>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </div>
      <span className={styles.location}>{location}</span>
      <span className={styles.price}>{`${price} zł`}</span>
      <div className={styles.favouriteWrapper}>
        <span className={styles.tooltip} tooltipText="Obserwuj" />
        <i
          role="presentation"
          className={`icon-heart-empty ${styles.icon}`}
          onClick={() => onClick()}
        />
      </div>
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
