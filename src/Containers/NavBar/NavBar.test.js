import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NavBarContainer } from './index';

describe('NavBar', () => {
  describe('Render', () => {
    it('should render OLX logo', () => {
      render(<NavBarContainer />);
      expect(screen.getAllByRole('banner')).toHaveLength(2);
    });

    it('should render icons', () => {
      render(<NavBarContainer />);
      expect(screen.getAllByRole('presentation')).toHaveLength(3);
    });

    it('should render button', () => {
      render(<NavBarContainer />);
      expect(screen.getByRole('button', { name: /dodaj ogłoszenie/i })).toBeInTheDocument();
    });
  });
});
