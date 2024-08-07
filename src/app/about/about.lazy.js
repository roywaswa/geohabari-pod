import React, { lazy, Suspense } from 'react';

const Lazyabout = lazy(() => import('./about'));

const about = props => (
  <Suspense fallback={null}>
    <Lazyabout {...props} />
  </Suspense>
);

export default about;
