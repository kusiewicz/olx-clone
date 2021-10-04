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
          <Icon className={`icon-search ${styles.searchIcon1}`} />
          <SearchBox
            value={searchText}
            className={`${styles.searchMainField}`}
            placeholder="19 630 571 ogłoszeń blisko Ciebie"
            onChange={({ target }) => setSearchText(target.value)}
          />
          {searchText && (
            <Icon
              datatestid="search-clear"
              className={`${styles.searchCancelIcon}`}
              onClick={() => setSearchText('')}
            />
          )}
        </Container>

        <Container className={`flex cntr rel ${styles.locationContainer} `}>
          <span className={styles.tooltip} tooltipText="Wybierz miasto lub kod pocztowy" />
          <Icon className={`icon-location-outline ${styles.locationIcon}`} />
          <SearchBox
            value={locationText}
            className={`${styles.locationField}`}
            placeholder="Cała Polska"
            onChange={({ target }) => setLocationText(target.value)}
          />
          {locationText && (
            <Icon
              datatestid="location-clear"
              className={`${styles.locationCancelIcon}`}
              onClick={() => setLocationText('')}
            />
          )}
        </Container>

        <Container className={`flex cntr ${styles.searchBtnContainer} `}>
          <Button className={styles.searchBtn}>Szukaj</Button>
          <Icon className={`icon-search ${styles.searchIcon2}`} />
        </Container>
      </Container>
    </>
  );
};

export default Search;
