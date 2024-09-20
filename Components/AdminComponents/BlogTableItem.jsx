import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  const router = useRouter();
  const BlogDate = new Date(date);

  const handleEdit = () => {
    router.push(`/admin/editBlog/${mongoId}`);
  }

  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} />
        <p>{author ? author : "Sin Autor"}</p>
      </th>
      <td className='px-6 py-4'>
        {title ? title : "Sin título"}
      </td>
      <td className='px-6 py-4'>
        {BlogDate.toDateString()}
      </td>
      <td className='px-6 py-4 flex gap-2'>
        <button onClick={handleEdit} className='text-blue-500 hover:text-blue-700'>
          Editar
        </button>
        <button onClick={() => deleteBlog(mongoId)} className='text-red-500 hover:text-red-700'>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default BlogTableItem
