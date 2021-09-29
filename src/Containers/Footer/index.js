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
      <a href="https://play.google.com/store/apps/details?id=pl.tablica&referrer=utm_source%3Dolx.pl%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
        <Container className={styles.googlePlay}>
          <Container className={styles.hoverText}>
            <h5 className={styles.grey}>Do pobrania w</h5>
            <h5 className={styles.color}>Google Play</h5>
          </Container>
        </Container>
      </a>
      <a href="https://apps.apple.com/pl/app/olx-pl-darmowe-og-oszenia/id531717763?l=pl&ls=1">
        <Container className={styles.appStore}>
          <Container className={styles.hoverText}>
            <h5 className={styles.grey}>Pobierz w</h5>
            <h5 className={styles.color}>AppStore</h5>
          </Container>
        </Container>
      </a>
      <h4 className={styles.mobileText}>Darmowa aplikacja na Twój telefon</h4>
    </Container>
  </Container>
);

export default Footer;
