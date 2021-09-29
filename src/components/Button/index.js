import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  <div className={className}>
    <h3>{children}</h3>
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
