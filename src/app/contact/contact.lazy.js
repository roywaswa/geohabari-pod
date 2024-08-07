import React, { lazy, Suspense } from 'react';

const Lazycontact = lazy(() => import('./contact'));

const contact = props => (
  <Suspense fallback={null}>
    <Lazycontact {...props} />
  </Suspense>
);

export default contact;
