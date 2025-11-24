'use client'

import { useEffect, useRef } from 'react'
import { Code, Database, Globe, Wrench, Users, Brain } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.children
    if (!cards || cards.length === 0) {
      console.log('[v0] Skills: No cards found for animation')
      return
    }

    console.log('[v0] Skills: Animating', cards.length, 'cards')

    gsap.fromTo(cards, 
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java'],
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQL', 'MySQL'],
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      skills: ['Machine Learning', 'Deep Learning'],
    },
    {
      icon: Wrench,
      title: 'Core CS Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Leadership', 'Team Management'],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and core competencies
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 dark:hover:bg-card/80"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/25 transition-all group-hover:rotate-6">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
