import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  <h5 className={className}>
    <h3>{children}</h3>
  </h5>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
