import React from 'react';
import styles from './styles.module.scss';

import { Container } from '../../Components';

const Footer = () => (
  <Container id="footer" className={`indent ${styles.footerContainer}`}>
    <Container className={styles.pointsLeft}>
      <ul className={styles.footerList}>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/lp/mobilne/">Aplikacje mobilne OLX.pl </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.pomoc.olx.pl">Pomoc</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/pakiety-promowan/">Wyróżnione ogłoszenia </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://biznes.olx.pl/">Oferta dla firm </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://blog.olx.pl/">Blog </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://pomoc.olx.pl/hc/pl/articles/360000828525">Regulamin</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://pomoc.olx.pl/hc/pl/articles/360000901525">Polityka prywatności </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://media.olx.pl/">Reklama </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://media.olx.pl/">Biuro prasowe</a>
        </li>
      </ul>
    </Container>
    <Container className={styles.pointsRight}>
      <ul className={styles.footerList}>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/jak-dziala-olx/">Jak działa OLX.pl </a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/bezpieczenstwo/">Zasady bezpieczeństwa</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/sitemap/">Mapa kategorii</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/sitemap/regions/">Mapa miejscowości</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://www.olx.pl/popularne/">Popularne wyszukiwania</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://careers.olxgroup.com/">Kariera</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://pomoc.olx.pl/hc/pl/articles/360000901525">Ustawienia plików cookie</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://kodyrabatowe.olx.pl/">Kody rabatowe</a>
        </li>
        <li className={styles.footerPoint}>
          <a href="https://ubezpieczenia.olx.pl/samochody">Ubezpieczenia OC/AC</a>
        </li>
      </ul>
    </Container>
    <Container className={styles.mobileDownload}>
      <Container className={styles.googlePlay} />
      <Container className={styles.appStore} />
      <h4 className={styles.mobileText}>Darmowa aplikacja na Twój telefon</h4>
    </Container>
  </Container>
);

export default Footer;
