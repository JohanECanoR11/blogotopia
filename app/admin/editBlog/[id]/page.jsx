'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = ({ params }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: '',
    authorImg: '',
    image: null
  });
  const [file, setFile] = useState(null);
  const router = useRouter();

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    });
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    if (file) formData.append('image', file);

    try {
      const response = await axios.put(`/api/blog/${params.id}`, formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        router.push('/admin'); // Redirigir al panel de administración
      } else {
        toast.error('Error al actualizar el blog');
      }
    } catch (error) {
      toast.error('Error al enviar los datos');
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen p-5 sm:p-12 flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-700">Editar Blog</h1>
        
        <label htmlFor="image" className="block mt-4 cursor-pointer">
          <img
            src={file ? URL.createObjectURL(file) : data.image}
            alt="Upload"
            className="w-full h-40 object-cover border rounded-md"
          />
        </label>
        <input
          type="file"
          id="image"
          onChange={onFileChange}
          hidden
        />
        
        <p className="text-xl font-semibold text-gray-700 mt-6">Título del Blog</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
          type="text"
          placeholder="Escribe el título aquí"
          required
        />
        
        <p className="text-xl font-semibold text-gray-700 mt-6">Descripción del Blog</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Escribe la descripción aquí"
          rows={6}
          required
        />
        
        <p className="text-xl font-semibold text-gray-700 mt-6">Categoría</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Startup">Startup</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Estilo de Vida">Estilo de Vida</option>
        </select>

        <button
          type="submit"
          className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Actualizar
        </button>

        {/* Botón de regresar */}
        <button
          type="button"
          onClick={() => router.push('/admin/blogList')} // Regresar al panel de administración
          className="mt-4 w-full py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
        >
          Regresar
        </button>
      </form>
    </div>
  )
}

export default EditBlog;
