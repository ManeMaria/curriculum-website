import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/footer'
import { LoadingScreen } from '@/components/loading-screen'
import { Nav } from '@/components/nav'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="relative min-h-svh">
      <span className="top-line" aria-hidden />
      <LoadingScreen />
      <div className="flex min-h-svh flex-col">
        <Nav />
        <main className="w-full flex-1 px-4 sm:px-8 lg:px-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
