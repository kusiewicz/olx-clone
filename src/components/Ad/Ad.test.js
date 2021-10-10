import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Ad from './index';
import sport from '../../Assets/Images';

const mocked = jest.fn();

describe('Ad', () => {
  describe('Render', () => {
    beforeEach(() => {
      render(<Ad title="talon" image={sport} location="Wrocław" price={5} onClick={mocked} />);
    });

    it('should render the Ad component', () => {
      expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('should display the title', () => {
      expect(screen.getByText(/talon/i));
    });

    it('should display the image', () => {
      expect(screen.getByRole('img', { name: /talon/i }));
    });

    it('should display the location', () => {
      expect(screen.getByText(/Wrocław/i));
    });

    it('should display the price', () => {
      expect(screen.getByText(/5 zł/i));
    });

    it('should display a "Obserwuj" icon', () => {
      expect(screen.getByRole('presentation'));
    });

    it('"Obserwuj" icon should handle onClick', () => {
      userEvent.click(screen.getByRole('presentation'));
      expect(mocked).toHaveBeenCalled();
    });

    it('should display the tooltip', () => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    it('should not display a delivery icon when a delivery prop is not passed to the component', () => {
      expect(screen.queryByRole('img', { name: /delivery/i })).not.toBeInTheDocument();
    });
  });

  describe('Delivery Icon', () => {
    it('should display a delivery icon when a delivery prop is passed to the component', () => {
      render(
        <Ad title="talon" image={sport} location="Wrocław" price={5} onClick={mocked} delivery />
      );
      expect(screen.getByRole('img', { name: /delivery/i })).toBeInTheDocument();
    });
  });
});
