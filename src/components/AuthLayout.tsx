import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg"

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col md:max-w-[462px] w-full">
        <img src={logoSvg} alt="Logo" className="my-8"/>
        <Outlet></Outlet> 
      </main>

    </div>
  )
}