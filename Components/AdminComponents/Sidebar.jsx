import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gray-100 h-screen'>
      <div className='px-4 py-3 border-b border-gray-300'>
        <Image src={assets.logo} width={240} alt='Logo' />
      </div>
      <div className="flex flex-col w-64 sm:w-80 h-full py-6 border-r border-gray-300 bg-white">
        <nav className="flex flex-col space-y-4 px-4">
          <Link href='/admin/addProduct' className="flex items-center gap-3 font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <Image src={assets.add_icon} alt='Agregar' width={28} />
            <p>Agregar blogs</p>
          </Link>
          <Link href='/admin/blogList' className="flex items-center gap-3 font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <Image src={assets.blog_icon} alt='Blogs' width={28} />
            <p>Blogs</p>
          </Link>
          <Link href='/admin/subscriptions' className="flex items-center gap-3 font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <Image src={assets.email_icon} alt='Suscripciones' width={28} />
            <p>Suscripciones</p>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
