import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <ToastContainer theme="dark" />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between w-full py-4 px-6 bg-white border-b border-gray-300 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Panel de Administración</h3>
          <Image src={assets.profile_icon} width={40} height={40} alt="Profile Icon" className="rounded-full" />
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
