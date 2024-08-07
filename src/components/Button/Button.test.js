import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button />', () => {
  test('it should mount', () => {
    render(<Button />);

    const Button = screen.getByTestId('Button');

    expect(Button).toBeInTheDocument();
  });
});