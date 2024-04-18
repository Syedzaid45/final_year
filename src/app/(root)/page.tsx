import Sidebar from '@/components/shared/Sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
         <h1>hello</h1>
          <UserButton afterSignOutUrl='/'/>

    </div>
  )
}

export default page