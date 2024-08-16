import React, { lazy, Suspense } from 'react';

const LazyThemedLayout = lazy(() => import('./ThemedLayout'));

const ThemedLayout = props => (
  <Suspense fallback={null}>
    <LazyThemedLayout {...props} />
  </Suspense>
);

export default ThemedLayout;
