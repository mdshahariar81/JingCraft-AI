
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

// =====================================================
// LAZY LOADED PAGES
// Each page loads only when its route is visited.
// =====================================================

const HomePage = lazy(() => import('../pages/home/HomePage'))
const MuseumPage = lazy(() => import('../pages/museum/MuseumPage'))
const DesignStudioPage = lazy(() => import('../pages/design-studio/DesignStudioPage'))
const HeritagePage = lazy(() => import('../pages/heritage/HeritagePage'))
const AboutPage = lazy(() => import('../pages/about/AboutPage'))
const DesignSystemPage = lazy(() => import('../pages/design-system/DesignSystemPage'))

// =====================================================
// LOADING FALLBACK
// Displayed while a page chunk is loading.
// =====================================================

function PageLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#F5F2E9]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#193C67]/20 border-t-[#193C67]" />

        <p className="text-xs tracking-[0.2em] text-[#193C67]/60">
          JINGCRAFT AI
        </p>
      </div>
    </div>
  )
}

// =====================================================
// ROUTER CONFIGURATION
// =====================================================

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<PageLoading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/museum',
        element: (
          <Suspense fallback={<PageLoading />}>
            <MuseumPage />
          </Suspense>
        ),
      },
      {
        path: '/design-studio',
        element: (
          <Suspense fallback={<PageLoading />}>
            <DesignStudioPage />
          </Suspense>
        ),
      },
      {
        path: '/heritage',
        element: (
          <Suspense fallback={<PageLoading />}>
            <HeritagePage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<PageLoading />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/design-system',
        element: (
          <Suspense fallback={<PageLoading />}>
            <DesignSystemPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
