import React, { lazy, Suspense } from 'react';

const LazyNewsLetter = lazy(() => import('./NewsLetter'));

const NewsLetter = props => (
  <Suspense fallback={null}>
    <LazyNewsLetter {...props} />
  </Suspense>
);

export default NewsLetter;
