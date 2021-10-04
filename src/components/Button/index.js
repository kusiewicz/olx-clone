import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, ariaLabel, tabIndex }) => (
  <div className={className} role="button" aria-label={ariaLabel} tabIndex={tabIndex}>
    <h3>{children}</h3>
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
};

export default Button;
