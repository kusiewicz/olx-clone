import React from 'react';
import styles from './styles.module.scss';
import { Container, Logo, Icon, HoverButton, SubLogo } from '../../Components';

const NavBar = () => (
  <>
    {/* Padding needed due to NavBar fixed position */}
    <Container className={styles.padded} />

    <Container id="header" className={styles.nav}>
      <Container className={`flex ${styles.wrapper}`}>
        <a href="http://www.olx.pl" className="rel">
          <Logo color="turquoise" />
          <SubLogo />
        </a>
        <Container className={`flex cntr ${styles.userPanel}`}>
          <Container className={styles.hover}>
            <span className={styles.message}>Wiadomości</span>
          </Container>
          <Icon className={`icon-heart-empty white rel ${styles.heartIcon} ${styles.hover}`} />
          <Container className={styles.hover}>
            <Icon className={`icon-user-o white ${styles.userIcon}`} />
            <span className={`rel ${styles.olxText}`}>Mój OLX</span>
          </Container>
          <HoverButton className={styles.btn}>Dodaj ogłoszenie</HoverButton>
        </Container>
      </Container>
    </Container>
  </>
);

export default NavBar;
