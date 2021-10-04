import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, role, tabIndex, ariaLabel, onClick }) => (
  <i
    className={className}
    role={role}
    aria-label={ariaLabel}
    tabIndex={tabIndex}
    onClick={onClick}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
