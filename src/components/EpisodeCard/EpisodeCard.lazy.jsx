import React, { lazy, Suspense } from 'react';

const LazyEpisodeCard = lazy(() => import('./EpisodeCard'));

const EpisodeCard = props => (
  <Suspense fallback={null}>
    <LazyEpisodeCard {...props} />
  </Suspense>
);

export default EpisodeCard;
