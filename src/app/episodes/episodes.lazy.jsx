import React, { lazy, Suspense } from 'react';

const Lazyepisodes = lazy(() => import('./page'));

const episodes = props => (
  <Suspense fallback={null}>
    <Lazyepisodes {...props} />
  </Suspense>
);

export default episodes;
