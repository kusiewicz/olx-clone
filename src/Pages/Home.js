import React, { useState, useEffect } from 'react';

import { NavBar, Search, Categories, PromotedAds, Jumbotron, Footer } from '../Containers';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  /* Disappearing NavBar */
  const navBarVisibilityHandler = () => {
    const scrollVertical = window.scrollY;
    if (scrollVertical > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navBarVisibilityHandler);

    return () => {
      window.removeEventListener('scroll', navBarVisibilityHandler);
    };
  });

  return (
    <>
      <NavBar hidden={scrolled} />
      <Search />
      <Categories />
      <PromotedAds />
      <Jumbotron />
      <Footer />
    </>
  );
};

export default Home;
