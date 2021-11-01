import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PromotedAdsContainer } from './index';

describe('PromotedAds', () => {
  describe('Render', () => {
    it('should render the heading title', () => {
      render(<PromotedAdsContainer />);
      expect(screen.getByRole('heading', { name: /ogłoszenia promowane/i })).toBeInTheDocument();
    });
  });
});
