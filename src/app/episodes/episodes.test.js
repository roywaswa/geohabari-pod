import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import episodes from './page';

describe('<episodes />', () => {
  test('it should mount', () => {
    render(<episodes />);

    const episodes = screen.getByTestId('episodes');

    expect(episodes).toBeInTheDocument();
  });
});