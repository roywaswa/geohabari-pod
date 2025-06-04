import React, { lazy, Suspense } from 'react';

const LazyShowThemes = lazy(() => import('./ShowThemes'));

const ShowThemes = props => (
  <Suspense fallback={null}>
    <LazyShowThemes {...props} />
  </Suspense>
);

export default ShowThemes;
