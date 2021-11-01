import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, HoverButton, Icon, WarningBanner, SearchBox } from '../../Components';

import styles from './styles.module.scss';

export const HomeSearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [warningBanner, setWarningBanner] = useState(true);
  const history = useHistory();

  const getLink = () => {
    let link;

    if (searchTerm && locationTerm) {
      link = `oferty/?loc=${locationTerm}&q=${searchTerm}`;
    } else if (searchTerm && !locationTerm) {
      link = `oferty/?q=${searchTerm}`;
    } else if (!searchTerm && locationTerm) {
      link = `oferty/?loc=${locationTerm}`;
    } else link = 'oferty/';

    return link;
  };

  return (
    <>
      {warningBanner && (
        <WarningBanner onClick={() => setWarningBanner((prevValue) => !prevValue)} />
      )}
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <SearchBox
          boxClassName={styles.searchMainContainer}
          inputClassName={styles.searchMainField}
          value={searchTerm}
          placeholder="19 630 571 ogłoszeń blisko Ciebie"
          setText={(value) => setSearchTerm(value)}
        >
          <Icon className={`icon-search ${styles.searchIcon1}`} role="presentation" />
        </SearchBox>

        <SearchBox
          boxClassName={styles.locationContainer}
          inputClassName={styles.locationField}
          value={locationTerm}
          placeholder="Cała Polska"
          setText={(value) => setLocationTerm(value)}
        >
          <Icon className={`icon-location-outline ${styles.locationIcon}`} role="presentation" />
        </SearchBox>
        <Container
          className={`flex cntr ${styles.searchBtnContainer}`}
          onClick={() => history.push(getLink())}
        >
          <HoverButton className={styles.searchBtn} tabIndex={0} ariaLabel="Szukaj">
            Szukaj
          </HoverButton>
          <Icon className={`icon-search ${styles.searchIcon2}`} role="presentation" />
        </Container>
      </Container>
    </>
  );
};

export default HomeSearchContainer;
