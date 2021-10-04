import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import WarningBanner from './index';

const mocked = jest.fn();

describe('WarningBanner', () => {
  describe('onClick', () => {
    it('should be able to handle click "X" icon', () => {
      render(<WarningBanner onClick={mocked} />);
      userEvent.click(screen.getByRole('button', { name: /zamknij banner/i }));
      expect(mocked).toHaveBeenCalledTimes(1);
    });
  });
});
