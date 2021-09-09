import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Logo = ({ color }) => (
  <>
    <span className={`${styles.o} ${styles[color]}`} />
    <span className={`${styles.l} ${styles[color]}`} />
    <span className={`${styles.x} ${styles[color]}`} />
  </>
);

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
