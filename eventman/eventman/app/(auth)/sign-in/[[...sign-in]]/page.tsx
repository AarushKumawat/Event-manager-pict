import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className = "flex content-center">
      <SignIn/>
    </div>
  )
}

export default page
