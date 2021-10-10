import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PromotedAds from './index';

describe('PromotedAds', () => {
  describe('Render', () => {
    it('should render the heading title', () => {
      render(<PromotedAds />);
      expect(screen.getByRole('heading', { name: /ogłoszenia promowane/i })).toBeInTheDocument();
    });
  });
});
