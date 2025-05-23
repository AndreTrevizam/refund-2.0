import { Outlet } from "react-router"
import { Header } from "./Header"

export function AppLayout() {
  return (
    <div className="bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3 w-full md:w-auto">
        <Header></Header>
        <Outlet></Outlet>
      </main>
    </div>
  )
}