import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({ className, children, ariaLabel, tabIndex }) => (
  <div
    className={`${styles.btn} ${className}`}
    role="button"
    aria-label={ariaLabel}
    tabIndex={tabIndex}
  >
    <span>{children}</span>
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
};

export default Button;
