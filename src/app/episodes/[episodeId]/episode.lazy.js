import React, { lazy, Suspense } from 'react';

const Lazyepisode = lazy(() => import('./page'));

const episode = props => (
  <Suspense fallback={null}>
    <Lazyepisode {...props} />
  </Suspense>
);

export default episode;
