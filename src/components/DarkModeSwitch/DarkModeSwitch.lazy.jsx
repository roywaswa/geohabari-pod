import React, { lazy, Suspense } from 'react';

const LazyDarkModeSwitch = lazy(() => import('./DarkModeSwitch'));

const DarkModeSwitch = props => (
  <Suspense fallback={null}>
    <LazyDarkModeSwitch {...props} />
  </Suspense>
);

export default DarkModeSwitch;
