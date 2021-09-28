import React from 'react';
import styles from './styles.module.scss';

import { Container, Button, Logo } from '../../Components';

const Jumbotron = () => (
  <Container id="jumbotron" className={styles.jumbotronContainer}>
    <Container className={styles.businessContainer}>
      <Container className={`flex ${styles.businessWrapper}`}>
        <Container className={styles.chart} />
        <Container className={`rel ${styles.businessTextWrapper}`}>
          <h2 className={styles.businessText}>Wyróżnij się jako firma!</h2>
          <h3 className={styles.businessSubText}>Poznaj ofertę OLX dla biznesu</h3>
        </Container>
        <a href="https://biznes.olx.pl/">
          <Button className={styles.businessButton}>Zobacz szczegóły</Button>
        </a>
      </Container>
    </Container>
    <Container className={styles.infoContainer}>
      <Container className={styles.infoWrapper}>
        <Container className={styles.logoWrapper}>
          <Logo color="darkGreen" size="big" className={styles.logo} />
        </Container>
        <p className={styles.infoText}>
          OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i
          Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz
          się z ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje,
          samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz
          coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku
          na OLX.pl
        </p>
        <Container className={styles.infoSocials}>
          <h4 className={styles.infoSubText}>Dołącz do nas:</h4>
          <Container className={styles.socialImages}>
            <a href="https://www.facebook.com/olx.polska">
              <Container className={styles.facebook} />
            </a>
            <a href="https://www.instagram.com/olxpolska/">
              <Container className={styles.instagram} />
            </a>
            <a href="https://www.youtube.com/channel/UCGr18y85p6zXQwBev6CGwow">
              <Container className={styles.youtube} />
            </a>
            <a href="https://pl.linkedin.com/company/olxpraca">
              <Container className={styles.linkedin} />
            </a>
          </Container>
        </Container>
      </Container>
    </Container>
    <Container className={styles.popularWrapper}>
      <Container className="indent">
        <Container className={styles.popularLeft}>
          <Container className={styles.popularCategoryImage} />
          <p className={styles.popularText}>
            <strong className={`${styles.bold}`}>Kategorie główne: </strong>
            Motoryzacja, Nieruchomości, Praca, Dom i Ogród, Elektronika, Moda, Rolnictwo, Zwierzęta,
            Dla Dzieci, Sport i Hobby, Muzyka i Edukacja, Usługi i Firmy, Noclegi, Oddam za darmo,
            Zamienię
          </p>
        </Container>
        <Container className={styles.popularRight}>
          <Container className={styles.popularPopularImage} />
          <p className={styles.popularText}>
            <strong className={`${styles.bold}`}>Popularne wyszukiwania: </strong>
            Praca, Mercedes, Zetor, Kamper, Ursus, Mieszkanie, 4x4, Monstera, Rower, Kawalerka,
            Neocate junior, Komoda, Mtz, Meble kuchenne, Wywrotka, Koparko ładowarka, Dom, Szafa,
            Kierowca, Uszkodzony
          </p>
        </Container>
      </Container>
    </Container>
  </Container>
);

export default Jumbotron;