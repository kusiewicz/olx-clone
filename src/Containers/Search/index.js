import React, { useState } from 'react';
import { Container, SearchBox, Button, Icon, WarningBanner } from '../../Components';

import styles from './styles.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [warningBanner, setWarningBanner] = useState(true);

  return (
    <>
      {warningBanner && (
        <WarningBanner onClick={() => setWarningBanner((prevValue) => !prevValue)} />
      )}
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <Container className={`flex cntr ${styles.searchMainContainer}`}>
          <Icon className={`icon-search ${styles.searchIcon1}`} role="presentation" />
          <SearchBox
            value={searchText}
            className={`${styles.searchMainField}`}
            placeholder="19 630 571 ogłoszeń blisko Ciebie"
            onChange={({ target }) => setSearchText(target.value)}
          />
          {searchText && (
            <Icon
              className={`${styles.searchCancelIcon}`}
              role="button"
              tabIndex={0}
              ariaLabel="wyczyść pole wyszukiwania"
              onClick={() => setSearchText('')}
            />
          )}
        </Container>

        <Container className={`flex cntr rel ${styles.locationContainer} `}>
          <span className={styles.tooltip} tooltiptext="Wybierz miasto lub kod pocztowy" />
          <Icon className={`icon-location-outline ${styles.locationIcon}`} />
          <SearchBox
            value={locationText}
            className={`${styles.locationField}`}
            placeholder="Cała Polska"
            onChange={({ target }) => setLocationText(target.value)}
          />
          {locationText && (
            <Icon
              className={`${styles.locationCancelIcon}`}
              role="button"
              tabIndex={0}
              ariaLabel="wyczyść pole lokalizacji"
              onClick={() => setLocationText('')}
            />
          )}
        </Container>

        <Container className={`flex cntr ${styles.searchBtnContainer} `}>
          <Button className={styles.searchBtn} tabIndex={0} ariaLabel="Szukaj">
            Szukaj
          </Button>
          <Icon className={`icon-search ${styles.searchIcon2}`} role="presentation" />
        </Container>
      </Container>
    </>
  );
};

export default Search;
