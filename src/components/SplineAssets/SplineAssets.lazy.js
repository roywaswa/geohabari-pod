import React, { lazy, Suspense } from 'react';

const LazySplineAssets = lazy(() => import('./SplineAssets'));

const SplineAssets = props => (
  <Suspense fallback={null}>
    <LazySplineAssets {...props} />
  </Suspense>
);

export default SplineAssets;
