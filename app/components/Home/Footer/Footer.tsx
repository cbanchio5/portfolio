import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#44444E]'>
       
        <div className="flex flex-wrap justify-center space-x-10 space-y-4 font-bold text-white">
            <div> Home </div>
            <div>  About </div>
            <div> Projects</div>
            <div>  Contact </div>
        </div>
           <p className='text-opacity-60 mt-6 text-center text-white'>Ⓒ Cesar Banchio </p>
    </div>
  )
}

export default Footer
