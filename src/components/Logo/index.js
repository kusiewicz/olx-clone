import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Logo = ({ className, size }) => (
  <div className={{ className }}>
    <span className={size === 'small' ? `${styles.oSmall}` : `${styles.oBig}`} />
    <span className={size === 'small' ? `${styles.lSmall}` : `${styles.lBig}`} />
    <span className={size === 'small' ? `${styles.xSmall}` : `${styles.xBig}`} />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Logo;
