import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">¡Bienvenido!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold">Publicaciones</h2>
          <p className="text-gray-500">Total: 120</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold">Usuarios</h2>
          <p className="text-gray-500">Total: 35</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold">Comentarios</h2>
          <p className="text-gray-500">Total: 350</p>
        </div>                      
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-full">
          <h2 className="text-xl font-semibold mb-4">Accesos rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">            
            <Link href='/admin/addProduct' className="bg-blue-500 text-white flex items-center gap-3 font-medium px-4 py-2 rounded-lg hover:bg-blue-300 hover:text-black transition-colors ">
            <Image src={assets.add_icon} alt='Agregar' width={28} />
              <p>Agregar blogs</p>
            </Link>            
            <Link href='/admin/blogList' className="bg-green-500 text-white flex items-center gap-3 font-medium px-4 py-2 rounded-lg hover:bg-green-300 hover:text-black transition-colors">
            <Image src={assets.blog_icon} alt='Blogs' width={28} />
            <p>Blogs</p>
          </Link>          
            <Link href='/admin/subscriptions' className="bg-red-500 text-white flex items-center gap-3 font-medium px-4 py-2 rounded-lg hover:bg-red-300 hover:text-black transition-colors">
            <Image src={assets.email_icon} alt='Suscripciones' width={28} />
            <p>Suscripciones</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
