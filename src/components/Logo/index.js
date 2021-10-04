import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Logo = ({ size }) => (
  <div className={styles.logoContainer}>
    <span className={size === 'small' ? `${styles.oSmall}` : `${styles.oBig}`} />
    <span className={size === 'small' ? `${styles.lSmall}` : `${styles.lBig}`} />
    <span className={size === 'small' ? `${styles.xSmall}` : `${styles.xBig}`} />
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 'small',
};

export default Logo;
