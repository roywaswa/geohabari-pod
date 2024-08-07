import React, { lazy, Suspense } from 'react';

const LazyLottieAnimation = lazy(() => import('./LottieAnimation'));

const LottieAnimation = props => (
  <Suspense fallback={null}>
    <LazyLottieAnimation {...props} />
  </Suspense>
);

export default LottieAnimation;
