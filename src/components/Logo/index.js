import React from 'react';
import styles from './styles.module.scss';

const Logo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { color } = props;

  return (
    <div className={`${styles.boxLogo} logo`}>
      <span className={`${styles.o} ${color}`} />
      <span className={`${styles.l} ${color}`} />
      <span className={`${styles.x} ${color}`} />
    </div>
  );
};

export default Logo;
