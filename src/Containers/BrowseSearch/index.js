import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { Container, SearchBox, Icon, HoverButton } from '../../Components';
import { useComponentVisibility } from '../../Hooks';
import styles from './styles.module.scss';

export const BrowseSearchContainer = ({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
  link,
}) => {
  const [distance, setDistance] = useState(0);
  const { isVisible, setIsVisible, ref } = useComponentVisibility(false, 'click');
  const history = useHistory();

  return (
    <>
      <Container id="search" className={`flex cntr ${styles.searchSectionContainer}`}>
        <SearchBox
          boxClassName={styles.searchMainContainer}
          inputClassName={styles.searchMainField}
          value={searchTerm}
          placeholder="Szukaj..."
          setText={(value) => setSearchTerm(value)}
        />

        <SearchBox
          boxClassName={styles.locationContainer}
          inputClassName={styles.locationField}
          value={locationTerm}
          placeholder="Cała Polska"
          setText={(value) => setLocationTerm(value)}
        >
          <Icon className={`icon-location-outline ${styles.locationIcon}`} role="presentation" />
        </SearchBox>

        <div className={`${styles.refContainer}`} ref={ref}>
          <Container className={`flex ${styles.distanceContainer}`}>
            <h4 className={styles.distance}>{`+ ${distance} km`}</h4>
            <Icon className={`icon-down-open-big ${styles.arrowIcon}`} role="presentation" />
            {isVisible && (
              <Container role="menu" className={styles.dropdown}>
                <li role="menuitem" onClick={() => setDistance(0)}>
                  + 0 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(2);
                    setIsVisible(false);
                  }}
                >
                  + 2 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(5);
                    setIsVisible(false);
                  }}
                >
                  + 5 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(10);
                    setIsVisible(false);
                  }}
                >
                  + 10 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(15);
                    setIsVisible(false);
                  }}
                >
                  + 15 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(30);
                    setIsVisible(false);
                  }}
                >
                  + 30 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(50);
                    setIsVisible(false);
                  }}
                >
                  + 50 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(75);
                    setIsVisible(false);
                  }}
                >
                  + 75 km
                </li>
                <li
                  role="menuitem"
                  onClick={() => {
                    setDistance(100);
                    setIsVisible(false);
                  }}
                >
                  + 100 km
                </li>
              </Container>
            )}
          </Container>
        </div>

        <Container
          className={`flex cntr ${styles.searchBtnContainer}`}
          onClick={() => history.replace(link)}
        >
          <HoverButton className={styles.searchBtn} tabIndex={0} ariaLabel="Szukaj">
            Szukaj
          </HoverButton>
          <Icon className={`icon-search ${styles.searchIcon}`} role="presentation" />
        </Container>
      </Container>
    </>
  );
};

BrowseSearchContainer.propTypes = {
  searchTerm: propTypes.string,
  setSearchTerm: propTypes.func,
  locationTerm: propTypes.string,
  setLocationTerm: propTypes.func,
  link: propTypes.string,
};
