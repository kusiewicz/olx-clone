import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import NavBar from './index';

describe('NavBar', () => {
  describe('Render', () => {
    it('should render OLX logo', () => {
      render(<NavBar />);
      expect(screen.getAllByRole('banner')).toHaveLength(2);
    });

    it('should render icons', () => {
      render(<NavBar />);
      expect(screen.getAllByRole('presentation')).toHaveLength(3);
    });

    it('should render button', () => {
      render(<NavBar />);
      expect(screen.getByRole('button', { name: /dodaj ogłoszenie/i })).toBeInTheDocument();
    });
  });
});
