import React, { useState } from 'react';
import { Container, SearchBox, Icon, Button } from '../../Components';

const AdvancedSearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');

  return (
    <>
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <Container clasName={`${styles.searchFieldsContainer}`}>
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
            <Icon className={`icon-location-outline ${styles.locationIcon}`} />
          </SearchBox>
        </Container>
      </Container>
    </>
  );
};

export default AdvancedSearchContainer;
