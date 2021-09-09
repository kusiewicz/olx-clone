import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.scss';

const HoverButton = ({ size, color, className, children }) => {
  const classProps = classnames(styles[size], styles[color], styles.hoverBtn, className);

  return (
    <a href="www.olx.pl" className={classProps}>
      <span>{children}</span>
    </a>
  );
};

HoverButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default HoverButton;
