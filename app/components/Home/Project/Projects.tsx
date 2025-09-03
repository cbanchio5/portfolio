import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='pt-16 pb-16 text-black'>
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-10 w-[80%] mx-auto items-center mt-20">
       {projectData.map((project) => {
        return (
            <div key={project.id} className="p-0 rounded-lg hover:scale-105 transition-all duration-300 container-drawn">
                <Link href={project.url} target="_blank">
                    <Image src={project.image} alt="Project" width="300" height="300" className='w-full opacity-90 rounded-[10%]' />

                    
                </Link>

            </div>
        )
       })}

      </div>
    </div>
  )
}

export default Projects
