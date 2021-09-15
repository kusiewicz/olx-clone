import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

const Tooltip = ({ className }) => (
  <span dataTooltip="bailamorena" className={`${styles.tooltip} ${className}`} />
);

Tooltip.propTypes = {
  className: propTypes.string,
};
