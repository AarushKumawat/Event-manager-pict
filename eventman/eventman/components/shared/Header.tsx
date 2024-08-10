
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

import Image from 'next/image'

const Header = () => {
  return (
    <header className = "w-full border-b">
        <div className = "wrapper flex items-center justify-between">
            <Link href ="/" className ="w-36">
               <Image src="/assets/images/image-removebg-preview.png" width = {128} height={38}
              alt="Event management site logo"
              /> 
            </Link>
             
            <div className = "">
                <SignedOut>
                    <Button className="rounded-full" size = "lg">
                        <Link href ='/sign-in'>
                        Login
                        </Link>
                    </Button>
                </SignedOut>

            </div>
        </div>
    </header>
  )
}
 
export default Header
