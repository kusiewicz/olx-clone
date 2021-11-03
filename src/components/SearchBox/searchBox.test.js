import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import SearchBox from './index';

const mocked = jest.fn();

describe('SearchBox', () => {
  describe('Render', () => {
    it('should render the input field', () => {
      render(<SearchBox value="test" placeholder="placeholdertext" />);
      expect(screen.getByPlaceholderText(/placeholdertext/i)).toBeInTheDocument();
    });

    it('should render the clear icon when text is entered', () => {
      render(<SearchBox value="test" placeholder="placeholdertext" />);
      expect(screen.getByRole('button', { name: /wyczyść pole/i })).toBeInTheDocument();
    });

    describe('Interaction', () => {
      it('should be able to click clear button', () => {
        render(<SearchBox value="test" placeholder="placeholdertext" setText={mocked} />);
        userEvent.click(screen.getByRole('button', { name: /wyczyść pole/i }));
        expect(mocked).toHaveBeenCalled();
      });
    });
  });
});
