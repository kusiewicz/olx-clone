import React from 'react';
import PropTypes from 'prop-types';

const HoverButton = ({ className, children }) => (
  <h5 className={className}>
    <span>{children}</span>
  </h5>
);

HoverButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default HoverButton;
