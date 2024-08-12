'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  const { user } = useUser(); // Destructure to directly get the user object
  console.log(user);

  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between px-4 ">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/image-removebg-preview.png"
            width={256}
            height={82}
            alt="Event management site logo"
          />
        </Link>
        <SignedIn>
            <nav className = "md:flex-between hidden w-full max-w-xs">
                <NavItems/>
            </nav>
        </SignedIn>

        <div className = "flex items-center space-x-4 mr-5 ">

          {/* {user ? (
            <UserButton />
          ) : (
            <SignedOut>
              <Button className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          )} */}
          <SignedIn>
             <UserButton/>
             <MobileNav/>
          </SignedIn>
          <SignedOut>
              <button className="black_btn">
                <Link href="/sign-in">Login</Link>
              </button>
            </SignedOut>

        </div>
      </div>
    </header>
  );
};

export default Header;
