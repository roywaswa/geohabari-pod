import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  test('it should mount', () => {
    render(<TextInput />);

    const TextInput = screen.getByTestId('TextInput');

    expect(TextInput).toBeInTheDocument();
  });
});