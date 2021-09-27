import React from 'react';
import styles from './styles.module.scss';

import { Container, Button, Logo } from '../../Components';

const Jumbotron = () => (
  <Container id="jumbotron" className={styles.jumbotronContainer}>
    <Container className={styles.businessContainer}>
      <Container className={`flex ${styles.businessWrapper}`}>
        <Container className={styles.chart} />
        <Container className={`rel ${styles.businessTextWrapper}`}>
          <span className={styles.businessText}>Wyróżnij się jako firma!</span>
          <span className={styles.businessSubText}>Poznaj ofertę OLX dla biznesu</span>
        </Container>
        <a href="https://biznes.olx.pl/">
          <Button className={styles.businessButton}>Zobacz szczegóły</Button>
        </a>
      </Container>
    </Container>
    <Container className={styles.infoWrapper}>
      <Container className="indent flex cntr">
        <Logo color="darkGreen" className={styles.logo} />
        <span className={styles.infoText}>
          OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i
          Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz
          się z ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje,
          samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz
          coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku
          na OLX.pl
        </span>
        <Container className={styles.infoSocials}>
          <span className={styles.infoSubText}>Dołącz do nas:</span>
          <Container className={styles.socialImages}>
            <a href="https://www.facebook.com/olx.polska">
              <span className={styles.facebook} />
            </a>
            <a href="https://www.instagram.com/olxpolska/">
              <span className={styles.instagram} />
            </a>
            <a href="https://www.youtube.com/channel/UCGr18y85p6zXQwBev6CGwow">
              <span className={styles.youtube} />
            </a>
            <a href="https://pl.linkedin.com/company/olxpraca">
              <span className={styles.linkedin} />
            </a>
          </Container>
        </Container>
      </Container>
    </Container>
    <Container className={styles.popularWrapper}>
      <Container className="indent">
        <Container className={styles.popularLeft}>
          <span className={styles.popularCategoryImage} />
          <span className={styles.popularText}>
            Kategorie główne: Motoryzacja, Nieruchomości, Praca, Dom i Ogród, Elektronika, Moda,
            Rolnictwo, Zwierzęta, Dla Dzieci, Sport i Hobby, Muzyka i Edukacja, Usługi i Firmy,
            Noclegi, Oddam za darmo, Zamienię
          </span>
        </Container>
        <Container className={styles.popularRight}>
          <span className={styles.popularPopularImage} />
          <span className={styles.popularText}>
            Popularne wyszukiwania: Praca, Mercedes, Zetor, Kamper, Ursus, Mieszkanie, 4x4,
            Monstera, Rower, Kawalerka, Neocate junior, Komoda, Mtz, Meble kuchenne, Wywrotka,
            Koparko ładowarka, Dom, Szafa, Kierowca, Uszkodzony
          </span>
        </Container>
      </Container>
    </Container>
  </Container>
);

export default Jumbotron;
