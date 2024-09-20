'use client';
import { useRouter } from 'next/navigation';
import SubsTableItem from '@/Components/AdminComponents/SubsTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [emails, setEmails] = useState([]);
  const router = useRouter();

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  }

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Suscripciones</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-300 shadow-md rounded-lg scrollbar-hide">
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Correo Suscrito
              </th>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Fecha
              </th>
              <th scope='col' className='px-6 py-3'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {emails.map((item, index) => (
              <SubsTableItem
                key={index}
                mongoId={item._id}
                deleteEmail={deleteEmail}
                email={item.email}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => router.push('/admin')}
        className="mt-4 py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
      >
        Regresar
      </button>
    </div>
  )
}

export default Page;
