import React, { lazy, Suspense } from 'react';

const LazyQuoteCards = lazy(() => import('./QuoteCards'));

const QuoteCards = props => (
  <Suspense fallback={null}>
    <LazyQuoteCards {...props} />
  </Suspense>
);

export default QuoteCards;
