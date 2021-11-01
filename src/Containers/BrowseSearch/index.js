/* eslint-disable */
import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import styles from './styles.module.scss';

import { Container, SearchBox, Icon, HoverButton } from '../../Components';
import { useComponentVisibility } from '../../Hooks';

import voivodeshipsData from '../../Fixtures/cities.json';

export const BrowseSearchContainer = ({
  searchTerm = '',
  setSearchTerm,
  locationTerm = '',
  setLocationTerm,
  link,
}) => {
  const history = useHistory();
  const [distance, setDistance] = useState(0);
  const distances = [0, 5, 10, 15, 30, 50, 75, 100];

  const { isVisible: isDistanceVisible, ref: distanceRef } = useComponentVisibility(false, 'click');
  const { isVisible: isLocationVisible, ref: locationRef } = useComponentVisibility(false, 'click');

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

        <div className={`rel ${styles.locationRefContainer}`} ref={locationRef}>
          <Container className={`rel ${styles.locationContainer}`}>
            <SearchBox
              inputClassName={styles.locationField}
              value={locationTerm}
              placeholder="Cała Polska"
              setText={(value) => setLocationTerm(value)}
            >
              <Icon
                className={`icon-location-outline ${styles.locationIcon}`}
                role="presentation"
              />
            </SearchBox>

            {isLocationVisible && (
              <Container role="listbox" className={styles.locationDropdown}>
                <Container className={styles.dropdownLeft}>
                  {voivodeshipsData.map((item) => (
                    <>
                      <Container className={`rel ${styles.voivodContainer}`}>
                        <li
                          role="option"
                          className={`inblock ${styles.listItem}`}
                          key={uuidv4()}
                          onClick={() => setLocationTerm(item.name)}
                        >
                          {item.name}
                        </li>
                        <Icon
                          role="presentation"
                          className={`inblock icon-right-open-big ${styles.cityIcon}`}
                        />

                        <Container className={styles.citiesContainer}>
                          {item.cities &&
                            item.cities.map((city) => (
                              <>
                                <li
                                  role="option"
                                  className={`inblock ${styles.listItem}`}
                                  key={uuidv4()}
                                  onClick={() => setLocationTerm(city)}
                                >
                                  {city}
                                </li>
                              </>
                            ))}
                        </Container>
                      </Container>
                    </>
                  ))}
                </Container>
              </Container>
            )}
          </Container>
        </div>

        <div className={`${styles.distanceRefContainer}`} ref={distanceRef}>
          <Container className={`flex rel ${styles.distanceContainer}`}>
            <h4 className={styles.distance}>{`+ ${distance} km`}</h4>
            <Icon className={`icon-down-open-big ${styles.arrowIcon}`} role="presentation" />
            {isDistanceVisible && (
              <Container role="listbox" className={styles.distanceDropdown}>
                {distances.map((item) => (
                  <li
                    role="option"
                    aria-selected={distance === item}
                    onClick={() => setDistance(item)}
                  >{`+ ${item} km`}</li>
                ))}
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

export default BrowseSearchContainer;
