import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { CategoriesContainer } from './index';

describe('Categories', () => {
  describe('Render', () => {
    it('should render the title heading', () => {
      render(<CategoriesContainer />);
      expect(screen.getByRole('heading', { name: /kategorie główne/i }));
    });
  });

  describe('Interaction', () => {
    it('subcategories should not be visible before clicking on the category', () => {
      render(<CategoriesContainer />);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('subcategories should be visible after clicking on the category', () => {
      render(<CategoriesContainer />);
      userEvent.click(screen.getAllByRole('button', { name: /pokaż kategorię/i })[0]);
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('subcategories should be hidden after second clicking on the same category', () => {
      render(<CategoriesContainer />);
      userEvent.click(screen.getAllByRole('button', { name: /pokaż kategorię/i })[0]);
      userEvent.click(screen.getAllByRole('button', { name: /pokaż kategorię/i })[0]);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });
});
