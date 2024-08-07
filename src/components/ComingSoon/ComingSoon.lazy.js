import React, { lazy, Suspense } from 'react';

const LazyComingSoon = lazy(() => import('./ComingSoon'));

const ComingSoon = props => (
  <Suspense fallback={null}>
    <LazyComingSoon {...props} />
  </Suspense>
);

export default ComingSoon;
