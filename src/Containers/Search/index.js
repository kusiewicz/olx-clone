import React from 'react';
import { Container, SearchBox, HoverButton, Icon } from '../../Components';

import styles from './styles.module.scss';

const Search = () => (
  <Container className={`${styles.searchSection} indent flex cntr`} id="search">
    <Container className={`${styles.searchMainContainer} flex cntr`}>
      <Icon className={`icon-search ${styles.searchIcon1}`} />
      <SearchBox className={`${styles.searchMainField}`} text="19 630 571 ogłoszeń blisko Ciebie" />
      <Icon className={`cancelSign ${styles.cancelIcon1}`} />
    </Container>
    <Container className={`${styles.locationContainer} flex cntr`}>
      <Icon className={`icon-location-outline ${styles.locationIcon}`} />
      <SearchBox className={`${styles.locationField}`} text="Cała Polska" />
      <Icon className={`cancelSign ${styles.cancelIcon2}`} />
    </Container>
    <Container className={`${styles.searchBtnContainer} flex cntr`}>
      <HoverButton className={styles.searchBtn}>Szukaj</HoverButton>
      <Icon className={`icon-search ${styles.searchIcon2}`} />
    </Container>
  </Container>
);

export default Search;
