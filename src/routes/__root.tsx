import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '@/components/footer'
import { MatrixRain } from '@/components/matrix-rain'
import { Nav } from '@/components/nav'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="relative min-h-svh">
      <MatrixRain className="fixed inset-0 -z-10 h-full w-full opacity-20" />
      <div className="flex min-h-svh flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
