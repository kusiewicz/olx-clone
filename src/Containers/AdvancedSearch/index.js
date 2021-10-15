import React, { useState } from 'react';
import { Container, SearchBox, Icon, Button } from '../../Components';

import styles from './styles.module.scss';

const AdvancedSearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [distance, setDistance] = useState(0);
  const [toggleDistance, setToggleDistance] = useState(false);

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

        <Container
          className={`flex ${styles.distanceContainer}`}
          onClick={() => setToggleDistance(true)}
        >
          <h4 className={styles.distance}>{`+ ${distance} km`}</h4>
          <Icon className={`icon-down-open-big ${styles.arrowIcon}`} role="presentation" />
          {toggleDistance && (
            <Container role="menu" className={styles.dropdown}>
              <li role="menuitem" onClick={() => setDistance(0)}>
                + 0 km
              </li>
              <li role="menuitem" onClick={() => setDistance(2)}>
                + 2 km
              </li>
              <li role="menuitem" onClick={() => setDistance(5)}>
                + 5 km
              </li>
              <li role="menuitem" onClick={() => setDistance(10)}>
                + 10 km
              </li>
              <li role="menuitem" onClick={() => setDistance(15)}>
                + 15 km
              </li>
              <li role="menuitem" onClick={() => setDistance(30)}>
                + 30 km
              </li>
              <li role="menuitem" onClick={() => setDistance(50)}>
                + 50 km
              </li>
              <li role="menuitem" onClick={() => setDistance(75)}>
                + 75 km
              </li>
              <li role="menuitem" onClick={() => setDistance(100)}>
                + 100 km
              </li>
            </Container>
          )}
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
