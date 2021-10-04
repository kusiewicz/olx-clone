import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from './index';

describe('SearchBox', () => {
  describe('Render', () => {
    it('should render search input element', () => {
      render(<Search />);
      expect(screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i)).toBeInTheDocument();
    });

    it('should render location input element', () => {
      render(<Search />);
      expect(screen.getByPlaceholderText(/cała polska/i)).toBeInTheDocument();
    });

    it('should render the search clear icon when text is entered', () => {
      render(<Search />);
      userEvent.type(
        screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i),
        'Search test'
      );
      expect(screen.getByTestId('search-clear')).toBeInTheDocument();
    });

    it('should render the location clear icon when text is entered', () => {
      render(<Search />);
      userEvent.type(screen.getByPlaceholderText(/cała polska/i), 'Location test');
      expect(screen.getByTestId('location-clear')).toBeInTheDocument();
    });
  });

  describe('Input', () => {
    it('should be able to input what to looking for', () => {
      render(<Search />);
      const inputEl = screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i);
      userEvent.type(inputEl, 'Search test');
      expect(inputEl.value).toBe('Search test');
    });

    it('should be able to enter a location', () => {
      render(<Search />);
      const inputEl = screen.getByPlaceholderText(/cała polska/i);
      userEvent.type(inputEl, 'Location test');
      expect(inputEl.value).toBe('Location test');
    });

    it('should be able to clear the search input', () => {
      render(<Search />);
      const inputEl = screen.getByPlaceholderText(/19 630 571 ogłoszeń blisko ciebie/i);
      userEvent.type(inputEl, 'Clear search input');
      userEvent.click(screen.getByTestId('search-clear'));
      expect(inputEl.value).toBe('');
    });

    it('should be able to clear the location input', () => {
      render(<Search />);
      const inputEl = screen.getByPlaceholderText(/cała polska/i);
      userEvent.type(inputEl, 'Clear location input');
      userEvent.click(screen.getByTestId('location-clear'));
      expect(inputEl.value).toBe('');
    });
  });
});
