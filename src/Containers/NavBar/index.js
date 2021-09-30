import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Container, Logo, Icon, Button, SubLogo } from '../../Components';

const NavBar = ({ hidden }) => (
  <>
    {/* Padding needed due to NavBar fixed position */}
    <Container className={styles.padded} />

    <Container id="header" className={`${styles.nav} ${hidden && styles.hidden}`}>
      <Container className={`flex ${styles.wrapper}`}>
        <a href="http://www.olx.pl" className="rel">
          <Logo color="turquoise" size="small" />
          <SubLogo />
        </a>
        <Container className={`flex cntr ${styles.userPanel}`}>
          <Container className={styles.hover}>
            <Icon className={`icon-comment rel ${styles.messageIcon}`} />
            <span className={`rel ${styles.message}`}>Wiadomości</span>
          </Container>
          <Icon className={`icon-heart-empty white rel ${styles.heartIcon} ${styles.hover}`} />
          <Container className={styles.hover}>
            <Icon className={`icon-user-o white ${styles.userIcon}`} />
            <span className={`rel ${styles.olxText}`}>Mój OLX</span>
          </Container>
          <Button className={styles.btn}>Dodaj ogłoszenie</Button>
        </Container>
      </Container>
    </Container>
  </>
);

NavBar.propTypes = {
  hidden: PropTypes.bool,
};

export default NavBar;
