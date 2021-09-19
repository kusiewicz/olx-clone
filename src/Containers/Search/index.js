import React, { useState } from 'react';
import classnames from 'classnames';
import { Container, SearchBox, HoverButton, Icon, Tooltip, WarningBanner } from '../../Components';

import styles from './styles.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [warningBanner, setWarningBanner] = useState(true);

  const cancelIcon = classnames(
    'cancelSign',
    `${styles.searchCancelIcon}`,
    searchText ? 'visible' : 'invisible'
  );
  const cancelIcon2 = classnames(
    'cancelSign',
    `${styles.locationCancelIcon}`,
    locationText ? 'visible' : 'invisible'
  );

  return (
    <>
      <WarningBanner
        visibility={warningBanner}
        onClick={() => setWarningBanner((prevValue) => !prevValue)}
      />
      <Container className={`indent flex cntr ${styles.searchSection}`} id="search">
        <Container className={`flex cntr ${styles.searchMainContainer}`}>
          <Icon className={`icon-search ${styles.searchIcon1}`} />
          <SearchBox
            value={searchText}
            className={`${styles.searchMainField}`}
            placeholder="19 630 571 ogłoszeń blisko Ciebie"
            onChange={({ target }) => setSearchText(target.value)}
          />
          <Icon className={cancelIcon} onClick={() => setSearchText('')} />
        </Container>

        <Container className={`flex cntr rel ${styles.locationContainer} `}>
          <Tooltip className={styles.tooltip} data="Wybierz miasto lub kod pocztowy" />
          <Icon className={`icon-location-outline ${styles.locationIcon}`} />
          <SearchBox
            value={locationText}
            className={`${styles.locationField}`}
            placeholder="Cała Polska"
            onChange={({ target }) => setLocationText(target.value)}
          />
          <Icon className={cancelIcon2} onClick={() => setLocationText('')} />
        </Container>

        <Container className={`flex cntr ${styles.searchBtnContainer} `}>
          <HoverButton className={styles.searchBtn}>Szukaj</HoverButton>
          <Icon className={`icon-search ${styles.searchIcon2}`} />
        </Container>
      </Container>
    </>
  );
};

export default Search;
