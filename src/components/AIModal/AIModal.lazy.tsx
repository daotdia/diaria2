import React, { lazy, Suspense } from 'react';

const LazyAiModal = lazy(() => import('./AiModal'));

const AiModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAiModal {...props} />
  </Suspense>
);

export default AiModal;
