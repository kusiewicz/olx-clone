import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Category from './index';

const image = '../../Assets/Images/sport.png';

const mocked = jest.fn();

describe('Category', () => {
  describe('Render', () => {
    it('should render the Category correctly', () => {
      render(<Category category="Sport" src={image} className="testClass" onClick={mocked} />);
      expect(screen.getByRole('link', { name: /sport/i })).toBeInTheDocument();
    });

    it('should render the image correctly', () => {
      render(<Category category="Sport" src={image} className="testClass" onClick={mocked} />);
      expect(screen.getByRole('img', { name: /sport/i })).toBeInTheDocument();
    });

    it('should call the function correctly', () => {
      render(<Category category="Sport" src={image} className="testClass" onClick={mocked} />);
      userEvent.click(screen.getByTestId('categoryBox'));
      userEvent.click(screen.getByTestId('categoryBox'));
      expect(mocked).toHaveBeenCalledTimes(2);
    });
  });
});
