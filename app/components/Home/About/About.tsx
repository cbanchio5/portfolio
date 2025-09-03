"use client"
import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from '../../Helper/SectionHeading'

const About = () => {
  const waveRef = useRef<SVGSVGElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (waveRef.current) observer.observe(waveRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || !waveRef.current) return

    const el = waveRef.current
    const paths = el.querySelectorAll('path')
    paths.forEach((node) => {
      try {
        const len = node.getTotalLength()
        node.style.setProperty('--len', `${len}`)
        node.style.setProperty('stroke-dasharray', `${len}`)
        node.style.setProperty('stroke-dashoffset', `${len}`)
      } catch (e) {}
    })
  }, [isVisible])

  return (
    <div className="pt-16 pb-16">
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Web Developer & Data Explorer
          </h1>
          <p className="mt-6 text-base">
            Experienced in building and optimizing web applications, developing automated reporting systems, and implementing real-time analytics solutions. Skilled at troubleshooting technical issues, enhancing operational efficiency, and streamlining data-driven workflows. I use web technologies and analytical skills to deliver actionable business insights, improve workflow performance, and create impactful, user-focused digital solutions.
          </p>
        </div>

        {/* < > SVG Animation */}
        <div className="flex justify-center items-center">
          <svg
            ref={waveRef}
            viewBox="0 0 100 100"
            width={150}  // bigger width
            height={150} // bigger height
            data-draw={isVisible ? 'true' : undefined}
          >
            {/* < symbol */}
            <path
              fill="none"
              stroke="#111"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M25 20 L5 50 L25 80"
              style={{ '--delay': '0s' } as React.CSSProperties}
            />
            {/* > symbol */}
            <path
              fill="none"
              stroke="#111"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M75 20 L95 50 L75 80"
              style={{ '--delay': '1.5s' } as React.CSSProperties}
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        [data-draw] path {
          stroke-dasharray: var(--len);
          stroke-dashoffset: var(--len);
          animation: draw 1.5s ease forwards;
          animation-delay: var(--delay, 0s);
        }
      `}</style>
    </div>
  )
}

export default About

