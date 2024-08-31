import React, { lazy, Suspense } from 'react';

const LazyBackdropBlur = lazy(() => import('./BackdropBlur'));

const BackdropBlur = props => (
  <Suspense fallback={null}>
    <LazyBackdropBlur {...props} />
  </Suspense>
);

export default BackdropBlur;
