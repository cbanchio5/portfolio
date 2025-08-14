import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'

const About = () => {
  return (
    <div className='pt-16 pb-16'>

        {/* Section Heading*/}
        <SectionHeading>About Me</SectionHeading>

        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            {/* Text Content*/}
            <div>
                <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>Web Developer & Data Explorer</h1>
                <p className='mt-6 text-base'>
                     Experienced in building and optimizing web applications, developing automated reporting systems, and implementing real-time analytics solutions. 
                   Skilled at troubleshooting technical issues, enhancing operational efficiency, and streamlining data-driven workflows. 
                   I use web technologies and analytical skills to deliver actionable business insights, improve workflow performance, and create impactful, user-focused digital solutions.
                </p>
                <div className="mt-8">
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 flex flex-col items-center justify-center"></div>
                    </div>
                </div>
            </div>
            {/* Stats Content*/}
            <div className="">

            </div>
        </div>
      
    </div>
  )
}

export default About
