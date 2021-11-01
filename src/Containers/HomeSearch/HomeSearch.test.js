import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { HomeSearchContainer } from './index';

describe('Search', () => {
  describe('Render', () => {
    it('should render search input element', () => {
      render(<HomeSearchContainer />);
      expect(screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i)).toBeInTheDocument();
    });

    it('should render location input element', () => {
      render(<HomeSearchContainer />);
      expect(screen.getByPlaceholderText(/cała polska/i)).toBeInTheDocument();
    });

    it('should render "search" icon and "location" icon', () => {
      render(<HomeSearchContainer />);
      expect(screen.getAllByRole('presentation')).toHaveLength(2);
    });

    it('should render the search clear icon when text is entered', () => {
      render(<HomeSearchContainer />);
      userEvent.type(
        screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i),
        'Search test'
      );
      expect(
        screen.getByRole('button', { name: /wyczyść pole wyszukiwania/i })
      ).toBeInTheDocument();
    });

    it('should render the location clear icon when text is entered', () => {
      render(<HomeSearchContainer />);
      userEvent.type(screen.getByPlaceholderText(/cała polska/i), 'Location test');
      expect(screen.getByRole('button', { name: /wyczyść pole lokalizacji/i })).toBeInTheDocument();
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

    it('should be able to clear the search input', () => {
      render(<HomeSearchContainer />);
      const inputEl = screen.getByPlaceholderText(/ogłoszeń blisko ciebie/i);
      userEvent.type(inputEl, 'Clear search input');
      userEvent.click(screen.getByRole('button', { name: /wyczyść pole wyszukiwania/i }));
      expect(inputEl.value).toBe('');
    });

    it('should be able to clear the location input', () => {
      render(<HomeSearchContainer />);
      const inputEl = screen.getByPlaceholderText(/cała polska/i);
      userEvent.type(inputEl, 'Clear location input');
      userEvent.click(screen.getByRole('button', { name: /wyczyść pole lokalizacji/i }));
      expect(inputEl.value).toBe('');
    });
  });
});
