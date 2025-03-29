import React, { lazy, Suspense } from 'react';

const LazyEpisodeBanner = lazy(() => import('./EpisodeBanner'));

const EpisodeBanner = props => (
  <Suspense fallback={null}>
    <LazyEpisodeBanner {...props} />
  </Suspense>
);

export default EpisodeBanner;
