import React, { lazy, Suspense } from 'react';

const LazyPodcastChip = lazy(() => import('./PodcastChip'));

const PodcastChip = props => (
  <Suspense fallback={null}>
    <LazyPodcastChip {...props} />
  </Suspense>
);

export default PodcastChip;
