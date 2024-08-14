import React, { lazy, Suspense } from 'react';

const Lazyabout = lazy(() => import('./page'));

const about = props => (
  <Suspense fallback={null}>
    <Lazyabout {...props} />
  </Suspense>
);

export default about;
