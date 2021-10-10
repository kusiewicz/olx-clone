import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Category from './index';

import sport from '../../Assets/Images';

const mocked = jest.fn();

describe('Category', () => {
  describe('Render', () => {
    it('should render the Category', () => {
      render(<Category category="Sport" src={sport} className="testClass" onClick={mocked} />);
      expect(screen.getByRole('button', { name: /pokaż kategorię/i })).toBeInTheDocument();
    });

    it('should render the image', () => {
      render(<Category category="Sport" src={sport} className="testClass" onClick={mocked} />);
      expect(screen.getByRole('img', { name: /sport/i })).toBeInTheDocument();
    });

    it('should call the function', () => {
      render(<Category category="Sport" src={sport} className="testClass" onClick={mocked} />);
      userEvent.click(screen.getByRole('button', { name: /pokaż kategorię/i }));
      userEvent.click(screen.getByRole('button', { name: /pokaż kategorię/i }));
      expect(mocked).toHaveBeenCalledTimes(2);
    });
  });
});
