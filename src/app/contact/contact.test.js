import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import contact from './page';

describe('<contact />', () => {
  test('it should mount', () => {
    render(<contact />);

    const contact = screen.getByTestId('contact');

    expect(contact).toBeInTheDocument();
  });
});