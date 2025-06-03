import React, { lazy, Suspense } from 'react';

const LazyTeaserBanner = lazy(() => import('./TeaserBanner'));

const TeaserBanner = props => (
  <Suspense fallback={null}>
    <LazyTeaserBanner {...props} />
  </Suspense>
);

export default TeaserBanner;
