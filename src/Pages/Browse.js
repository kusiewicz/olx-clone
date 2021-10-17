import React, { useState } from 'react';
import { NavBarContainer, AdvancedSearchContainer, FooterContainer } from '../Containers';

// eslint-disable-next-line arrow-body-style
const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <NavBarContainer />
      <AdvancedSearchContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FooterContainer />
    </>
  );
};

export default Browse;
