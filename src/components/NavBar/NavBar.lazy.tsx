import React, { lazy, Suspense } from 'react'

const LazyNavBar = lazy(async () => await import('./NavBar'))

const NavBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyNavBar {...props} />
  </Suspense>
)

export default NavBar
