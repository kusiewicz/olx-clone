import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

// eslint-disable-next-line no-unused-vars
const HoverButton = ({ className, children, ariaLabel, tabIndex, color }) => (
  <div
    className={`${color && styles[`${color}Btn`]} ${className}`}
    role="button"
    aria-label={ariaLabel}
    tabIndex={tabIndex}
  >
    <span>{children}</span>
  </div>
);

HoverButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
};

export default HoverButton;
