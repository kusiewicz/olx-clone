import React from 'react';
import styles from './styles.module.scss';
import { Container, Logo, Icon, HoverButton, SubLogo } from '../../Components';

const NavBar = () => (
  <>
    {/* Padding needed due to NavBar fixed position */}
    <Container className={styles.padded} />

    <Container id="header" className={styles.nav}>
      <Container className={`${styles.wrapper} flex indent`}>
        <a href="http://www.olx.pl" className={`${styles.logo} rel`}>
          <Logo color="turquoise" />
          <SubLogo />
        </a>
        <Container className={`${styles.userPanel} flex cntr`}>
          <Icon className={`icon-heart-empty white ${styles.heartIcon} ${styles.hover} rel`} />
          <Container className={styles.hover}>
            <Icon className={`icon-user-o white ${styles.userIcon}`} />
            <span className={`${styles.olxText} rel`}>Mój OLX</span>
          </Container>
          <HoverButton className={styles.btn}>Dodaj ogłoszenie</HoverButton>
        </Container>
      </Container>
    </Container>
  </>
);

export default NavBar;
