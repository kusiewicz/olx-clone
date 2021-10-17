import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, HoverButton, Icon, WarningBanner, SearchBox } from '../../Components';

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
        <Link className={`flex cntr ${styles.searchBtnContainer} `} to={`oferty/${searchText}`}>
          <HoverButton className={styles.searchBtn} tabIndex={0} ariaLabel="Szukaj">
            Szukaj
          </HoverButton>
          <Icon className={`icon-search ${styles.searchIcon2}`} role="presentation" />
        </Link>
      </Container>
    </>
  );
};

export default SearchContainer;
