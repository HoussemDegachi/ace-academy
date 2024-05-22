import { ReactNode } from "react"
import Nav from "./Nav"
import MenuBar from "./MenuBar"
import { useAuth } from "@/contexts/AuthProvider"
import { Navigate } from "react-router-dom"

type MainLayoutProps = {
    children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/" />
  }

  return (
    <div className="lg:flex lg:justify-between">
      <div className="lg:hidden">
        <Nav />
      </div>
        <div className="pb-10 pt-16 lg:pt-4 px-6 w-full">
        {children}
        </div>
      <div className="hidden lg:block min-w-[300px] border-l-2 px-6 py-6 h-screen">
        <MenuBar />
      </div>
    </div>
  )
}

export default MainLayout