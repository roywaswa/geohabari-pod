import React, { lazy, Suspense } from 'react';

const LazyTextInput = lazy(() => import('./TextInput'));

const TextInput = props => (
  <Suspense fallback={null}>
    <LazyTextInput {...props} />
  </Suspense>
);

export default TextInput;
