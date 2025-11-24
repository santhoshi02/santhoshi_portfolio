'use client'

import { useEffect, useRef } from 'react'
import { Award, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.children
    if (!cards || cards.length === 0) {
      console.log('[v0] Certificates: No cards found for animation')
      return
    }

    console.log('[v0] Certificates: Animating', cards.length, 'cards')

    gsap.fromTo(cards, 
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotation: -5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const certificates = [
    {
      title: 'Cambridge English Empower Level B2',
      issuer: 'Cambridge University',
      focus: 'Advanced English Communication',
    },
    {
      title: 'Python Data Structures',
      issuer: 'Coursera',
      focus: 'Data Structures & Algorithms in Python',
    },
    {
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      focus: 'Network Fundamentals & Protocols',
    },
    {
      title: 'SQL Basics for Data Science Specialization',
      issuer: 'Coursera',
      focus: 'Database Management & SQL Queries',
    },
  ]

  return (
    <section ref={sectionRef} id="certificates" className="py-12 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Certificates & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 dark:hover:bg-card/80"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/25 transition-all group-hover:rotate-12">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CheckCircle2 className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 min-h-[3.5rem]">
                {cert.title}
              </h3>

              <p className="text-base text-primary font-semibold mb-3">{cert.issuer}</p>

              <p className="text-sm text-muted-foreground line-clamp-2">{cert.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
