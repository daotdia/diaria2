import React, { lazy, Suspense } from 'react'

const LazyApp = lazy(async () => await import('./App'))

const App = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyApp {...props} />
  </Suspense>
)

export default App
