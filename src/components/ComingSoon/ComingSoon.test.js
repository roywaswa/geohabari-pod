import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComingSoon from './ComingSoon';

describe('<ComingSoon />', () => {
  test('it should mount', () => {
    render(<ComingSoon />);

    const ComingSoon = screen.getByTestId('ComingSoon');

    expect(ComingSoon).toBeInTheDocument();
  });
});