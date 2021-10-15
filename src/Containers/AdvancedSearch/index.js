import React, { useState } from 'react';
import { Container, SearchBox, Icon, Button } from '../../Components';

import styles from './styles.module.scss';

const AdvancedSearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');

  return (
    <>
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <SearchBox
          boxClassName={styles.searchMainContainer}
          inputClassName={styles.searchMainField}
          value={searchText}
          placeholder="Szukaj..."
          setText={(value) => setSearchText(value)}
        />

        <SearchBox
          boxClassName={styles.locationContainer}
          inputClassName={styles.locationField}
          value={locationText}
          placeholder="Cała Polska"
          setText={(value) => setLocationText(value)}
        >
          <Icon className={`icon-location-outline ${styles.locationIcon}`} role="presentation" />
        </SearchBox>

        <Container className={`flex ${styles.distanceContainer}`}>
          <h4 className={styles.distance}>+ 0 km</h4>
          <Icon className={`icon-down-open-big ${styles.arrowIcon}`} role="presentation" />

          <ul className={styles.dropdown}>
            <li>+ 0 km</li>
            <li>+ 2 km</li>
            <li>+ 5 km</li>
            <li>+ 10 km</li>
            <li>+ 15 km</li>
            <li>+ 30 km</li>
            <li>+ 50 km</li>
            <li>+ 75 km</li>
            <li>+ 100 km</li>
          </ul>
        </Container>

        <Container className={`flex cntr ${styles.searchBtnContainer} `}>
          <Button className={styles.searchBtn} tabIndex={0} ariaLabel="Szukaj">
            Szukaj
          </Button>
          <Icon className={`icon-search ${styles.searchIcon}`} role="presentation" />
        </Container>
      </Container>
    </>
  );
};

export default AdvancedSearchContainer;
