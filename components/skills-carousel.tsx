"use client"

import { useEffect, useRef } from "react"

const skills = [
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "TypeScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Next.js", icon: "fas fa-bolt" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Python", icon: "fab fa-python" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "Linux", icon: "fab fa-linux" },
  { name: "Virtualization", icon: "fas fa-server" },
]

export default function SkillsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset when we've scrolled past the first set of items
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scroller.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  // Duplicate skills array for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills]

  return (
    // Fixed width wrapper - will not flex or adjust based on content
    <div className="w-full max-w-full">
      {/* Gradient wrapper matching project cards - fixed dimensions */}
      <div
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: "linear-gradient(135deg, #0f172a, #6d28d9)",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {/* Inner black background - fixed width */}
        <div 
          className="relative overflow-hidden rounded-[1.35rem] bg-black"
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {/* Skills heading inside the container */}
          <div className="px-6 pt-4 pb-2">
            <h2 className="text-sm font-semibold tracking-widest text-white/50">
              SKILLS
            </h2>
          </div>

          {/* Scrollable skill items - overflow hidden, fixed width, auto-scrolling */}
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto scroll-pl-4 gap-3 snap-none px-8 pb-6 pt-2"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm whitespace-nowrap px-5 py-3 flex items-center gap-3 hover:bg-neutral-900/80 transition-colors duration-300"
                style={{ minWidth: "auto" }}
              >
                {/* Icon */}
                <i 
                  className={`${skill.icon} text-lg text-white/90`}
                />
                {/* Skill name */}
                <span className="text-sm font-medium text-white/90">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
