import React, { lazy, Suspense } from 'react';

const LazyLatestEp = lazy(() => import('./LatestEp'));

const LatestEp = props => (
  <Suspense fallback={null}>
    <LazyLatestEp {...props} />
  </Suspense>
);

export default LatestEp;
