import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import about from './about';

describe('<about />', () => {
  test('it should mount', () => {
    render(<about />);

    const about = screen.getByTestId('about');

    expect(about).toBeInTheDocument();
  });
});