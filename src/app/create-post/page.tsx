"use client"
import Form from '@/components/form'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'

import React from 'react'

async function page() {

  return (
    <div className=' text-center pt-36 px-5 border border-white min-h-screen max-w-[85rem] mx-auto bg-gray-900'>
      <h1 className='text-4xl'>Create Post</h1>
      <Form />
      <LogoutLink>Logout</LogoutLink>
    </div>
  )
}

export default page