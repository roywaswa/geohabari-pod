import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import episode from './page';

describe('<episode />', () => {
  test('it should mount', () => {
    render(<episode />);

    const episode = screen.getByTestId('episode');

    expect(episode).toBeInTheDocument();
  });
});