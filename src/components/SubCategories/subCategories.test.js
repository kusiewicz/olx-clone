import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubCategories from './index';

describe('SubCategories', () => {
  describe('Render', () => {
    it('should render SubCategories properly', () => {
      render(
        <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} visibility />
      );
      expect(
        screen.getByRole('link', { name: /Zobacz wszystkie ogłoszenia/i })
      ).toBeInTheDocument();
    });

    it('should display a list of SubCategories', () => {
      render(
        <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} visibility />
      );
      expect(screen.getByRole('heading', { name: /sukienki/i })).toBeInTheDocument();
    });

    it('should contain the correct number of SubCategories', () => {
      render(
        <SubCategories
          category="Moda"
          subCategory={['Sukienki', 'Buty', 'Koszulki', 'Spodenki']}
          visibility
        />
      );
      expect(screen.getAllByRole('listitem').length).toBe(4);
    });
  });
});
