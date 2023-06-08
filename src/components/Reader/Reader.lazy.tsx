import React, { lazy, Suspense } from 'react';

const LazyReader = lazy(() => import('./Reader'));

const Reader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyReader {...props} />
  </Suspense>
);

export default Reader;
