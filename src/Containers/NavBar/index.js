import React from 'react';

import styles from './styles.module.scss';

import { Logo, SubLogo } from '../../Components';

const NavBar = () => (
  <div className={`${styles.topBanner}`}>
    <a href="http://www.olx.pl" className={`${styles.wrapper} cntr`}>
      <Logo color="turquoise" />
      <SubLogo />
    </a>
  </div>
);

export default NavBar;
