"use client"
import React, { useEffect, useRef } from 'react';
import { FaDownload } from "react-icons/fa6";

const Hero: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const blobPaths = [
    "M0,0 C -20,-20, 20,-40, 50,-20 C 80,0, 60,40, 20,40 C -10,30, -20,20, 0,0 Z",
    "M0,0 C -25,-10, 25,-30, 60,-10 C 90,10, 70,40, 30,50 C -5,40, -25,20, 0,0 Z",
    "M0,0 C -15,-25, 15,-45, 45,-25 C 75,-5, 55,35, 15,35 C -10,25, -15,15, 0,0 Z",
    "M0,0 C -30,-15, 30,-35, 65,-15 C 95,5, 75,45, 35,55 C -5,45, -30,20, 0,0 Z"
  ];

  const colors = ["#7dc6ff", "#ffb3c6", "#a3d9a5", "#ffd27f", "#c6a3ff"];

  const createSplash = (x: number, y: number) => {
  const svg = svgRef.current;
  if (!svg) return;

  const pathData = blobPaths[Math.floor(Math.random() * blobPaths.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  path.setAttribute("fill", color);
  path.setAttribute("opacity", "0");
  path.setAttribute("filter", "url(#watercolor)");

  // Start small and rotated
  const rotation = Math.random() * 360;
  path.setAttribute("transform", `translate(${x}, ${y}) scale(0) rotate(${rotation})`);
  path.style.transition = "transform 1s ease-out, opacity 1s ease-out";

  svg.appendChild(path);

  // Animate to final scale & opacity
  requestAnimationFrame(() => {
    const scale = 0.8 + Math.random() * 0.5;
    path.setAttribute("transform", `translate(${x}, ${y}) scale(${scale}) rotate(${rotation})`);
    path.setAttribute("opacity", (0.2 + Math.random() * 0.3).toString());
  });
};


  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Create 3 initial random splashes
    const rect = svg.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      createSplash(x, y);
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createSplash(x, y);
  };

  return (
    <div
      className='w-full pt-[4vh] md:pt-[10vh] h-screen bg-[#FEFEFA] overflow-hidden relative'
      onClick={handleClick}
    >
      {/* SVG background for splashes */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <filter id="watercolor">
            <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>
      </svg>

      {/* Hero content */}
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-black font-semibold">Hi, I am Cesar Banchio</h1>
            <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]  text-black'>
              FullStack Web Developer
            </h1>
            <p className='mt-6 text-sm md:text-base text-black'>
              Web development, complemented by expertise in Accounting and data analysis. 
            </p>
            <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
              transition-all duration-200 rounded-lg mt-8 bg-black hover:bg-[#F2F3F4] hover:text-black
              flex items-center space-x-2'>
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
