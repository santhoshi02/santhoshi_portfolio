'use client'

import { useEffect, useRef } from 'react'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('[v0] Education: Component mounted')
    const cards = cardsRef.current?.children
    if (!cards || cards.length === 0) {
      console.log('[v0] Education: No cards found')
      return
    }

    console.log('[v0] Education: Animating', cards.length, 'cards')
    
    gsap.fromTo(
      cards,
      {
        x: (index) => (index % 2 === 0 ? -80 : 80),
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        },
      }
    )
  }, [])

  const education = [
    {
      institution: 'Malla Reddy College of Engineering and Technology',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      specialization: 'Specialized in AIML',
      duration: 'Nov 2021 - June 2025',
      location: 'Hyderabad',
      grade: 'CGPA: 7.58',
    },
    {
      institution: 'Krishnaveni Junior College',
      degree: 'Intermediate',
      specialization: 'Maths, Physics and Chemistry',
      duration: 'Jun 2019 - July 2021',
      location: 'Khammam',
      grade: 'Percentage: 84%',
    },
  ]

  return (
    <section ref={sectionRef} id="education" className="py-12 sm:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div ref={cardsRef} className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 sm:p-10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] dark:hover:bg-card/80"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-primary/10 rounded-2xl hover:bg-primary/25 transition-all hover:rotate-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-lg sm:text-xl font-semibold text-primary">{edu.degree}</p>
                    {edu.specialization && (
                      <p className="text-base sm:text-lg text-muted-foreground mt-2">{edu.specialization}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-6 text-base sm:text-lg text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="inline-block px-5 py-3 bg-secondary/50 text-secondary-foreground rounded-xl text-base sm:text-lg font-semibold">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
