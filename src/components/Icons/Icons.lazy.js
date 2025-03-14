import React, { lazy, Suspense } from 'react';

const LazyIcons = lazy(() => import('./Icons'));

const Icons = props => (
  <Suspense fallback={null}>
    <LazyIcons {...props} />
  </Suspense>
);

export default Icons;
