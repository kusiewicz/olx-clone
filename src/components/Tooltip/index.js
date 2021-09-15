import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const Tooltip = ({ className, tooltipText }) => (
  <span tooltipText={tooltipText} className={`${styles.tooltip} ${className}`} />
);

Tooltip.propTypes = {
  className: propTypes.string,
  tooltipText: propTypes.string,
};

export default Tooltip;
