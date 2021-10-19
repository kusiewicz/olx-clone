import React from 'react';

import { NavBarContainer } from '../Containers/NavBar';
import { HomeSearchContainer } from '../Containers/HomeSearch';
import { CategoriesContainer } from '../Containers/Categories';
import { PromotedAdsContainer } from '../Containers/PromotedAds';
import { JumbotronContainer } from '../Containers/Jumbotron';
import { FooterContainer } from '../Containers/Footer';

const Home = () => (
  <>
    <NavBarContainer />
    <HomeSearchContainer />
    <CategoriesContainer />
    <PromotedAdsContainer />
    <JumbotronContainer />
    <FooterContainer />
  </>
);

export default Home;
