"use client"
import React, { use, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

function AdminComponent() {
    const {isLoaded,user}= useUser();
    const router = useRouter();
  useEffect(() => {
    if (isLoaded){
        const role = (user?.publicMetadata as {role?: string}).role;
        if (!user || role !== 'admin'){
        router.push('/')
        }
    }
    },[isLoaded,user,router])
     
  return (
    <div className='h-screen flex justify-center items-center text-3xl'>this is admin page</div>
  )
}

export default AdminComponent