import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, onClick }) => (
  /* 'role - presentantion' allows to bypass required keyboard listener */
  <i role="presentation" className={className} onClick={onClick} />
);

Icon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
