import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LottieAnimation from './LottieAnimation';

describe('<LottieAnimation />', () => {
  test('it should mount', () => {
    render(<LottieAnimation />);

    const LottieAnimation = screen.getByTestId('LottieAnimation');

    expect(LottieAnimation).toBeInTheDocument();
  });
});