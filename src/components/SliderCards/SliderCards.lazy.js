import React, { lazy, Suspense } from 'react';

const LazySliderCards = lazy(() => import('./SliderCards'));

const SliderCards = props => (
  <Suspense fallback={null}>
    <LazySliderCards {...props} />
  </Suspense>
);

export default SliderCards;
