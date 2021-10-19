import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import { Container, Logo, Icon, HoverButton, SubLogo } from '../../Components';

export const NavBarContainer = () => {
  const [scrolled, setScrolled] = useState(false);
  const prevScroll = useRef(0);

  /* Disappearing NavBar */
  const navBarVisibilityHandler = () => {
    const scrollVertical = window.scrollY;
    if (scrollVertical >= prevScroll.current) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    prevScroll.current = scrollVertical;
  };

  useEffect(() => {
    window.addEventListener('scroll', navBarVisibilityHandler);

    return () => {
      window.removeEventListener('scroll', navBarVisibilityHandler);
    };
  });
  return (
    <>
      {/* Padding needed due to NavBar fixed position */}
      <Container className={styles.padded} />

      <Container
        id="header"
        className={`${styles.nav} ${scrolled && styles.hidden}`}
        role="navigation"
      >
        <Container className={`flex ${styles.wrapper}`}>
          <a href="http://localhost:3000/" className="rel">
            <Logo color="turquoise" size="small" />
            <SubLogo />
          </a>
          <Container className={`flex cntr ${styles.userPanel}`}>
            <Container className={styles.hover}>
              <Icon className={`icon-comment rel ${styles.messageIcon}`} role="presentation" />
              <span className={`rel ${styles.message}`}>Wiadomości</span>
            </Container>
            <Icon
              className={`icon-heart-empty white rel ${styles.heartIcon} ${styles.hover}`}
              role="presentation"
            />
            <Container className={styles.hover}>
              <Icon className={`icon-user-o white ${styles.userIcon}`} role="presentation" />
              <span className={`rel ${styles.olxText}`}>Mój OLX</span>
            </Container>
            <HoverButton
              className={styles.btn}
              color="white"
              ariaLabel="Dodaj ogłoszenie"
              tabIndex={0}
            >
              Dodaj ogłoszenie
            </HoverButton>
          </Container>
        </Container>
      </Container>
    </>
  );
};
