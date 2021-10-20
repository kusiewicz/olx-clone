import React, { useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { BrowseSearchContainer } from '../BrowseSearch';

export const BrowseContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const { search } = useLocation();

  const { q, loc } = queryString.parse(search);

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

  useState(() => {
    setSearchTerm(q);
    setLocationTerm(loc);
  });

  return (
    <>
      <BrowseSearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationTerm={locationTerm}
        setLocationTerm={setLocationTerm}
        link={getLink()}
      />
    </>
  );
};
