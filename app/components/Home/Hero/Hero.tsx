import React from 'react'
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#FEFEFA] overflow-hidden relative'>
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Content */}
            <div >
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-black font-semibold">Hi, I am Cesar Banchio</h1>
                <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]  text-black'>
                    FullStack Web Developer
                </h1>
                <p className='mt-6 text-sm md:text-base text-black'>
                   I have a strong background in web development, complemented by expertise in Accounting and data analysis. 
                   Experienced in building and optimizing web applications, developing automated reporting systems, and implementing real-time analytics solutions. 
                   Skilled at troubleshooting technical issues, enhancing operational efficiency, and streamlining data-driven workflows. 
                   I use web technologies and analytical skills to deliver actionable business insights, improve workflow performance, and create impactful, user-focused digital solutions.
                </p>
                <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                transition-all duration-200 rounded-lg mt-8 bg-black hover:bg-[#F2F3F4] hover:text-black
                flex items-center space-x-2'>
                    <span>Download CV</span>
                    <FaDownload />
                </button>
            </div>
            {/* Image */}
            <div className="">
                
            </div>

           </div>
        </div>
      
    </div>
  )
}

export default Hero
