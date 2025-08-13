import { navLinks } from '@/app/constants/constants'
import Link from 'next/link'
import React from 'react'
import { HiBars3 } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] w-full bg-white border-b-2 border-black shadow-[0_3px_0_black]'>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

        {/* Logo / Branding */}
        <h1 className="text-2xl font-normal">Simplix</h1>

        {/* Desktop Navigation (lg and above) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link'>{navLink.label}</p>
            </Link>
          ))}
        </div>

        {/* Contact Button & Burger Menu */}
        <div className="flex items-center space-x-4">
          <button className='nav__link'>Contact me</button>
          {/* Burger Menu (only on small/medium) */}
          <HiBars3 className='w-8 h-8 cursor-pointer text-black lg:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Nav
