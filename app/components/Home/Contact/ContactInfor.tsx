import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";



const ContactInfor = () => {
  return (
    <div>
        <div className="flex items-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-col">
                <FaGithub className='w-4 h-4 md:w-7 md:h-7' />
            </div>
            <div className="">
                <Link href="https://www.github.com/cbanchio5" target="_blank" className='text-lg sm:text-xl font-bold'>My Github</Link>
            </div>
        </div>

        <div className="flex items-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-col">
                <MdEmail className='w-4 h-4 md:w-7 md:h-7' />
            </div>
            <div className="">
                <h1 className='text-lg sm:text-xl font-bold'>cbanchio5@gmail.com</h1>
            </div>
        </div>

        <div className="flex items-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-col">
                <FaLinkedin className='w-4 h-4 md:w-7 md:h-7' />
            </div>
            <div className="">
                <Link href="https://www.linkedin.com/cbanchio5" target="_blank" className='text-lg sm:text-xl font-bold'>My Linkedin</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactInfor
