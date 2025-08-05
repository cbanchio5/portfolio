import { navLinks } from '@/app/constants/constants'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

        <div className="flex items-center space-x-10">
            {navLinks.map((navLink) => {
                return <Link key={navLink.id} href={navLink.url}><p className='nav__link'>{navLink.label}</p></Link>
            })}
        </div>
      </div>
    </div>
  )
}

export default Nav
