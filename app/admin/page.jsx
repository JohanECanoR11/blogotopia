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
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Gestionar Usuarios</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded">Ver Publicaciones</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded">Configuración</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
