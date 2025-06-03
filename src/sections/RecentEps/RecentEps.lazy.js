import React, { lazy, Suspense } from 'react';

const LazyRecentEps = lazy(() => import('./RecentEps'));

const RecentEps = props => (
  <Suspense fallback={null}>
    <LazyRecentEps {...props} />
  </Suspense>
);

export default RecentEps;
