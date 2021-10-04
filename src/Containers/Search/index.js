import React, { useState } from 'react';
import classnames from 'classnames';
import { Container, SearchBox, Button, Icon, Tooltip, WarningBanner } from '../../Components';

import styles from './styles.module.scss';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [warningBanner, setWarningBanner] = useState(true);

  const cancelIcon = classnames(`${styles.searchCancelIcon}`, searchText ? 'visible' : 'invisible');
  const cancelIcon2 = classnames(
    `${styles.locationCancelIcon}`,
    locationText ? 'visible' : 'invisible'
  );

  return (
    <>
      <WarningBanner
        visibility={warningBanner}
        onClick={() => setWarningBanner((prevValue) => !prevValue)}
      />
      <Container id="search" className={`indent flex cntr ${styles.searchSectionContainer}`}>
        <Container className={`flex cntr ${styles.searchMainContainer}`}>
          <Icon className={`icon-search ${styles.searchIcon1}`} />
          <SearchBox
            value={searchText}
            className={`${styles.searchMainField}`}
            placeholder="19 630 571 ogłoszeń blisko Ciebie"
            onChange={({ target }) => setSearchText(target.value)}
          />
          {/* popraw */}
          <Icon
            datatestid="search-clear"
            className={cancelIcon}
            onClick={() => setSearchText('')}
          />
        </Container>

        <Container className={`flex cntr rel ${styles.locationContainer} `}>
          <Tooltip className={styles.tooltip} tooltipText="Wybierz miasto lub kod pocztowy" />
          <Icon className={`icon-location-outline ${styles.locationIcon}`} />
          <SearchBox
            value={locationText}
            className={`${styles.locationField}`}
            placeholder="Cała Polska"
            onChange={({ target }) => setLocationText(target.value)}
          />
          <Icon
            datatestid="location-clear"
            className={cancelIcon2}
            onClick={() => setLocationText('')}
          />
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
