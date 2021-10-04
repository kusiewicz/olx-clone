import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubCategories from './index';

describe('SubCategories', () => {
  describe('Render', () => {
    it('should render the SubCategories component', () => {
      render(<SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />);
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the heading text', () => {
      render(<SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />);
      expect(screen.getByRole('link', { name: /zobacz wszystkie ogłoszenia/i }));
    });

    it('should display the category name', () => {
      render(<SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />);
      expect(screen.getByRole('heading', { name: /moda/i }));
    });

    it('should display the subcategory name', () => {
      render(<SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />);
      expect(screen.getByRole('link', { name: /buty/i }));
    });
  });
});
