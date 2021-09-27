import React from 'react';
import propTypes from 'prop-types';

const Tooltip = ({ className, tooltipText }) => <span data={tooltipText} className={className} />;

Tooltip.propTypes = {
  className: propTypes.string,
  tooltipText: propTypes.string,
};

export default Tooltip;
