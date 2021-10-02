import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubCategories from './index';

test('check if SubCategories list exist', () => {
  render(<SubCategories category="Moda" subCategory={['Sukienki', 'Bluzy']} visibility />);
  const header = screen.getByText(/Zobacz wszystkie ogłoszenia/i);
  expect(header).toBeInTheDocument();
});
