import { navLinks } from '@/app/constants/constants'
import React from 'react'
import Link from 'next/link'
import { CgClose } from "react-icons/cg";

//Define Props
type Props = {
    showNav: boolean
    closeNav: () => void
}

const MobileNav = ({showNav, closeNav} : Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      {/* Overlay*/}
      <div className={`fixed ${navOpen} transform transition-all duration-500 bg-white z-[1000] opacity-70 w-full h-screen`}></div>
      {/* Nav Links*/}
      <div className={`text-black ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg:white space-y-6 z-[1006]`}>
        
             {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='nav__link text-[20px] ml-12 pb-2 sm:text-[30px]'>{navLink.label}</p>
            </Link>
          ))}
        {/* Close Button*/}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h8 w-6 h-6 text-black'/>
        
      </div>
    </div>
  )
}

export default MobileNav
