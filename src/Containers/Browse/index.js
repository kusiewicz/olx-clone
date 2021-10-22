/* eslint-disable */
import React, { useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { Container, HoverButton, Icon } from '../../Components';
import { BrowseSearchContainer } from '../BrowseSearch';

import styles from './styles.module.scss';

export const BrowseContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [searchInDescription, setSearchInDescription] = useState(false);
  const [withDelivery, setWithDelivery] = useState(false);
  const [photoOnly, setPhotoOnly] = useState(false);
  const { search } = useLocation();
  const { q, loc } = queryString.parse(search);

  const getLink = () => {
    let link;

    if (searchTerm && locationTerm) {
      link = `/oferty/?loc=${locationTerm}&q=${searchTerm}`;
    } else if (searchTerm && !locationTerm) {
      link = `/oferty/?q=${searchTerm}`;
    } else if (!searchTerm && locationTerm) {
      link = `/oferty/?loc=${locationTerm}`;
    } else link = '/oferty';

    return link;
  };

  useState(() => {
    setSearchTerm(q);
    setLocationTerm(loc);
  });

  return (
    <>
      <Container className="indent">
        <BrowseSearchContainer
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationTerm={locationTerm}
          setLocationTerm={setLocationTerm}
          link={getLink()}
        />
        <Container className={`${styles.browseOptionsContainer} flex`}>
          <Container className="flex">
            <Container className={`rel ${styles.checkboxWrapper}`}>
              <Container className={`inblock ${styles.middle}`}>
                <input
                  type="checkbox"
                  id="desc"
                  className={styles.checkbox}
                  checked={searchInDescription}
                  onChange={() => setSearchInDescription((v) => !v)}
                />
                <label htmlFor="desc" className="rel" />
              </Container>
              <Container className={`inblock ${styles.middle}`}>
                <label htmlFor="desc" className={styles.labelText}>
                  szukaj również w opisach
                </label>
              </Container>
            </Container>

            <Container className={`rel ${styles.checkboxWrapper}`}>
              <Container className={`inblock ${styles.middle}`}>
                <input
                  type="checkbox"
                  id="photoOnly"
                  className={styles.checkbox}
                  checked={photoOnly}
                  onChange={() => setPhotoOnly((v) => !v)}
                />
                <label htmlFor="photoOnly" className="rel" />
              </Container>
              <Container className={`inblock ${styles.middle}`}>
                <label htmlFor="photoOnly" className={styles.labelText}>
                  tylko ze zdjęciem
                </label>
              </Container>
            </Container>

            <Container className={`rel ${styles.checkboxWrapper}`}>
              <Container className={`inblock ${styles.middle}`}>
                <input
                  type="checkbox"
                  id="delivery"
                  className={styles.checkbox}
                  checked={withDelivery}
                  onChange={() => setWithDelivery((v) => !v)}
                />
                <label htmlFor="delivery" className="rel" />
              </Container>
              <Container className={`inblock ${styles.middle}`}>
                <label htmlFor="delivery" className={styles.labelText}>
                  <span className={styles.delivery} role="img" aria-label="delivery" />
                  tylko z przesyłką OLX
                </label>
              </Container>
            </Container>
          </Container>
          <HoverButton className={styles.button}>
            <Icon className={`icon-heart-empty ${styles.heartIcon}`} role="presentation" />
            <span>Obserwuj wyszukiwanie</span>
          </HoverButton>
        </Container>
      </Container>
    </>
  );
};
