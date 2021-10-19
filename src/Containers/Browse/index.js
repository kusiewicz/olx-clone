import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowseSearchContainer } from '../BrowseSearch';

export const BrowseContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const context = useParams();
  console.log(context);

  return (
    <>
      <BrowseSearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
};
