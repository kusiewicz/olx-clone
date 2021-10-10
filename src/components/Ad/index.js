import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Ad = ({ title, image, location, price, delivery, onClick }) => (
  <article className={`rel ${styles.adContainer}`}>
    <div
      className={`rel ${styles.imageWrapper}`}
      role="button"
      aria-label="Otwórz ogłoszenie"
      tabIndex={0}
    >
      <a href="www.placeholder" className={`rel ${styles.imageWrapper}`}>
        <img alt={title} src={image} />
        {delivery && <span className={styles.delivery} role="img" aria-label="delivery" />}
      </a>
    </div>
    <div className={styles.titleWrapper}>
      <a href="www.placeholder" className={styles.titleWrapper}>
        <span className={styles.title}>{title}</span>
      </a>
    </div>
    <span className={styles.location}>{location}</span>
    <span className={styles.price}>{`${price} zł`}</span>
    <div className={styles.favouriteWrapper}>
      <span className={styles.tooltip} role="tooltip" tooltiptext="Obserwuj" />
      <i
        role="presentation"
        className={`icon-heart-empty ${styles.icon}`}
        onClick={() => onClick()}
      />
    </div>
  </article>
);

Ad.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  delivery: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Ad;
