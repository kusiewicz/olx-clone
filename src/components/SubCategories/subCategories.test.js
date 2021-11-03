import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubCategories from './index';

describe('SubCategories', () => {
  describe('Render', () => {
    it('should render the SubCategories component', () => {
      render(
        <Router>
          <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />
        </Router>
      );
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should display the heading text', () => {
      render(
        <Router>
          <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />
        </Router>
      );
      expect(screen.getByRole('link', { name: /zobacz wszystkie ogłoszenia/i }));
    });

    it('should display the category name', () => {
      render(
        <Router>
          <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />
        </Router>
      );
      expect(screen.getByRole('heading', { name: /moda/i }));
    });

    it('should display the subcategory name', () => {
      render(
        <Router>
          <SubCategories category="Moda" subCategory={['Sukienki', 'Buty', 'Koszulki']} />
        </Router>
      );
      expect(screen.getByRole('link', { name: /buty/i }));
    });
  });
});
