import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { HomeSearchContainer } from './index';

describe('HomeSearchContainer', () => {
  describe('Render', () => {
    it('should render search input element', () => {
      render(<HomeSearchContainer />);
      expect(screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i)).toBeInTheDocument();
    });

    it('should render location input element', () => {
      render(<HomeSearchContainer />);
      expect(screen.getByPlaceholderText(/cała polska/i)).toBeInTheDocument();
    });

    it('should render "search" icon, "location" icon and "search" button icon', () => {
      render(<HomeSearchContainer />);
      expect(screen.getAllByRole('presentation')).toHaveLength(3);
    });

    it('should render the search clear button when text is entered', () => {
      render(<HomeSearchContainer />);
      userEvent.type(
        screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i),
        'Search test'
      );
      expect(screen.getByRole('button', { name: /wyczyść pole/i })).toBeInTheDocument();
    });

    it('should render button', () => {
      render(<HomeSearchContainer />);
      expect(screen.getByRole('button', { name: /szukaj/i })).toBeInTheDocument();
    });
  });

  describe('Input', () => {
    it('should be able to input what to looking for', () => {
      render(<HomeSearchContainer />);
      const inputEl = screen.getByPlaceholderText(/ogłoszeń blisko ciebie/i);
      userEvent.type(inputEl, 'Search test');
      expect(inputEl.value).toBe('Search test');
    });

    it('should be able to enter a location', () => {
      render(<HomeSearchContainer />);
      const inputEl = screen.getByPlaceholderText(/cała polska/i);
      userEvent.type(inputEl, 'Location test');
      expect(inputEl.value).toBe('Location test');
    });
  });
});
