import React, { lazy, Suspense } from 'react'

const LazyDiary = lazy(async () => await import('./Diary'))

const Diary = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyDiary {...props} />
  </Suspense>
)

export default Diary
