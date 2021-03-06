import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const HoverButton = ({ className, children, ariaLabel, tabIndex, color }) => {
  const classes = `${color ? styles[`${color}Btn`] : ' '} ${className}`.trim(' ');

  return (
    <div className={classes} role="button" aria-label={ariaLabel} tabIndex={tabIndex}>
      <span>{children}</span>
    </div>
  );
};

HoverButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.number,
  color: PropTypes.string,
};

export default HoverButton;
