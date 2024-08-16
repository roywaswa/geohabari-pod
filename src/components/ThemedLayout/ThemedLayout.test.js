import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemedLayout from './ThemedLayout';

describe('<ThemedLayout />', () => {
  test('it should mount', () => {
    render(<ThemedLayout />);

    const ThemedLayout = screen.getByTestId('ThemedLayout');

    expect(ThemedLayout).toBeInTheDocument();
  });
});