'use client';

import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {

  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const isAuthenticated = true;

    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  },[]);

  return (
    <div className="flex h-screen bg-gray-100">      
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between w-full py-4 px-6 bg-white border-b border-gray-300 shadow-md">
        <Image src={assets.logo} width={240} alt='Logo' />
          <h3 className="text-xl font-semibold text-gray-800">Panel de Administración</h3>          
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
