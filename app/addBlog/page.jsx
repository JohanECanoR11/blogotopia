'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

const AddBlog = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Johan Cano',
    authorImg: '/author_img.png'
  });
  const [image, setImage] = useState(null);
  const router = useRouter();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prev => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Johan Cano',
          authorImg: '/author_img.png'
        });
        setImage(null);
      } else {
        toast.error('Error al agregar el blog');
      }
    } catch (error) {
      toast.error('Error al enviar los datos');
    }
  }

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5 sm:p-12 flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
      <p className="text-2xl font-semibold text-gray-700">Cargar Miniatura</p>
        <label htmlFor="image" className="block mt-4 cursor-pointer">
        <Image
            className="rounded-md border"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="Upload area"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"          
          hidden
          required
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
          Agregar
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          className="mt-4 w-full py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
        >
          Regresar
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
