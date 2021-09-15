import React, { useState } from 'react';
import classnames from 'classnames';
import { Container, SearchBox, HoverButton, Icon, Tooltip } from '../../Components';

import styles from './styles.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');

  const cancelIcon = classnames(
    'cancelSign',
    `${styles.searchCancelIcon}`,
    searchText && 'visible'
  );
  const cancelIcon2 = classnames(
    'cancelSign',
    `${styles.locationCancelIcon}`,
    locationText && 'visible'
  );

  return (
    <Container className={`${styles.searchSection} indent flex cntr`} id="search">
      <Container className={`${styles.searchMainContainer} flex cntr`}>
        <Icon className={`icon-search ${styles.searchIcon1}`} />
        <SearchBox
          value={searchText}
          className={`${styles.searchMainField}`}
          placeholder="19 630 571 ogłoszeń blisko Ciebie"
          onChange={({ target }) => setSearchText(target.value)}
        />
        <Icon className={cancelIcon} onClick={() => setSearchText('')} />
      </Container>

      <Container className={`${styles.locationContainer} flex cntr rel`}>
        <Tooltip className={styles.tooltip} tooltipText="Wybierz miasto lub kod pocztowy" />
        <Icon className={`icon-location-outline ${styles.locationIcon}`} />
        <SearchBox
          value={locationText}
          className={`${styles.locationField}`}
          placeholder="Cała Polska"
          onChange={({ target }) => setLocationText(target.value)}
        />
        <Icon className={cancelIcon2} onClick={() => setLocationText('')} />
      </Container>

      <Container className={`${styles.searchBtnContainer} flex cntr`}>
        <HoverButton className={styles.searchBtn}>Szukaj</HoverButton>
        <Icon className={`icon-search ${styles.searchIcon2}`} />
      </Container>
    </Container>
  );
};

export default Search;
