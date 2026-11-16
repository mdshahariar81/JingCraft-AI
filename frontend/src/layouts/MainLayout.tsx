import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Shared navigation will be implemented in the layout phase. */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Shared footer will be implemented in the layout phase. */}
    </div>
  )
}

export default MainLayout
