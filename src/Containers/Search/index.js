import React, { useState } from 'react';
import { Container, Button, Icon, WarningBanner, SearchBox } from '../../Components';

import styles from './styles.module.scss';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [warningBanner, setWarningBanner] = useState(true);

  return (
    <>
      {warningBanner && (
        <WarningBanner onClick={() => setWarningBanner((prevValue) => !prevValue)} />
      )}
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <SearchBox
          boxClassName={styles.searchMainContainer}
          inputClassName={styles.searchMainField}
          value={searchText}
          placeholder="19 630 571 ogłoszeń blisko Ciebie"
          setText={(value) => setSearchText(value)}
        >
          <Icon className={`icon-search ${styles.searchIcon1}`} role="presentation" />
        </SearchBox>

        <SearchBox
          boxClassName={styles.locationContainer}
          inputClassName={styles.locationField}
          value={locationText}
          placeholder="Cała Polska"
          setText={(value) => setLocationText(value)}
        >
          <Icon className={`icon-location-outline ${styles.locationIcon}`} role="presentation" />
        </SearchBox>
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

export default SearchContainer;
