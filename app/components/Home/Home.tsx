'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Project/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos'
import "aos/dist/aos.css";



const Home = () => {

 useEffect(() => {
  const initAos = async () => {
    const AOS = (await import("aos")).default; // ✅ grab default export
    AOS.init({
      duration: 1000,
      easing: "ease",
      anchorPlacement: "top-bottom",
      once: true,
    });
    AOS.refresh(); 
  };

  initAos(); 
}, []);



  return (
    <div className='overflow-hidden'>
       
      <Hero />
      <About  />
      <Projects  />
      <Skills />
      <Contact/>
     
    </div>
  )
}

export default Home
