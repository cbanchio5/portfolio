import Image from 'next/image';
import React from 'react'

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
    }
    
}

const SkillCard = ({skill} : Props) => {
    const {image, title} = skill
  return (
    <div className='p-6 hover:bg-[#DCDCDC] duration-300 mx-auto my-auto transition-all text-center rounded-lg handmade-btn handmade-btn::before '>
      <Image src={image} alt={title} width="80" height="80" className='object-cover mx-auto'/>
      <p>{title}</p>
    </div>
  )
}

export default SkillCard
