"use client"
import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import SideNav from 'app/(dashboard)/_components/SideNav';  // Import your SideNav component

function TopHeader() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden' onClick={toggleSideNav} />
      {/* Clicking the logo triggers the toggleSideNav function */}
      <div onClick={toggleSideNav} className='cursor-pointer md:hidden'>
        <Image src='/logo.svg' width={150} height={100} />
      </div>
      <UserButton />
      {/* Render the SideNav based on the state */}
      {isSideNavOpen && <SideNav />}
    </div>
  );
}

export default TopHeader;
