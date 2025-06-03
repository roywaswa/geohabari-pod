import React, { lazy, Suspense } from 'react';

const LazyHeroSection = lazy(() => import('./HeroSection'));

const HeroSection = props => (
  <Suspense fallback={null}>
    <LazyHeroSection {...props} />
  </Suspense>
);

export default HeroSection;
