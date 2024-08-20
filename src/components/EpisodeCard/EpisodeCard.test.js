import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EpisodeCard from './EpisodeCard';

describe('<EpisodeCard />', () => {
  test('it should mount', () => {
    render(<EpisodeCard />);

    const EpisodeCard = screen.getByTestId('EpisodeCard');

    expect(EpisodeCard).toBeInTheDocument();
  });
});