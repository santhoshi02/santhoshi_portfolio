'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.children
    if (!cards || cards.length === 0) {
      console.log('[v0] Projects: No cards found for animation')
      return
    }

    console.log('[v0] Projects: Animating', cards.length, 'cards')

    gsap.fromTo(cards, 
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
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

  const projects = [
    {
      title: 'Car Rental Management System',
      role: 'Full Stack Developer',
      description:
        'Designed and developed a complete car rental management system using Java with an object-oriented architecture. Implemented core modules for car listing, availability tracking, rental booking, customer management, and dynamic price calculation. Built a responsive frontend with HTML/CSS/JS.',
      tech: ['Java', 'OOP', 'HTML', 'CSS', 'JavaScript', 'Netlify'],
      features: [
        'Java-based OOP design with classes for Car, Customer, and Rental',
        'Rental booking, return workflow, and real-time availability updates',
        'Price calculation based on duration and car type',
        'Search and filter for available cars with booking confirmations',
      ],
      featured: true,
      demoLink: '#',
      githubLink: 'https://github.com/santhoshi02',
    },
    {
      title: 'Hotel Reservation System',
      role: 'Full Stack Developer',
      description:
        'Built a hotel room reservation platform inspired by real-world hotel booking systems. Implemented Java backend logic for room management, reservation processing, customer tracking, and availability checks. Developed a modern frontend to allow users to browse rooms and make bookings.',
      tech: ['Java', 'OOP', 'React', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Java backend with OOP-based modules for Room, Customer, and Reservation',
        'Room search, availability filtering, booking confirmation, and cancellation',
        'Automatic total cost calculation using check-in and check-out dates',
        'Admin dashboard to add, update, and delete rooms',
      ],
      featured: true,
      demoLink: '#',
      githubLink: 'https://github.com/santhoshi02',
    },
    {
      title: 'MamaBot – AI-Powered Pregnancy Support System',
      role: 'ML/NLP Developer',
      description:
        'Applied machine learning techniques including classification, regression, and clustering for an AI-powered pregnancy support chatbot. Processed and analyzed datasets to provide data-driven insights and support for expecting mothers.',
      tech: ['Machine Learning', 'NLP', 'Python', 'Data Analysis'],
      features: [
        'ML-based classification and regression models',
        'Natural Language Processing for conversational support',
        'Data-driven insights for pregnancy health tracking',
      ],
      featured: false,
      demoLink: '#',
      githubLink: 'https://github.com/santhoshi02',
    },
    {
      title: "Detecting Parkinson's Disease Using Machine Learning",
      role: 'ML Developer',
      description:
        'Applied machine learning techniques including classification, regression, and clustering to detect Parkinson\'s disease with high accuracy. Processed and analyzed patient datasets to extract meaningful features linked to symptom severity and progression.',
      tech: ['Machine Learning', 'Python', 'Data Visualization'],
      features: [
        'High-accuracy disease detection using ML classification',
        'Feature extraction from patient clinical data',
        'Visualizations correlating markers with disease stages',
      ],
      featured: false,
      demoLink: '#',
      githubLink: 'https://github.com/santhoshi02',
    },
    {
      title: 'Skyward Sketchpad Using Python',
      role: 'Computer Vision Developer',
      description:
        'Developed a computer vision-based system to enable screen drawing by detecting a colored fingertip or cap. Implemented real-time motion tracking using OpenCV and machine learning techniques.',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning'],
      features: [
        'Real-time fingertip/colored cap detection',
        'Gesture-based drawing without physical touch',
        'Motion tracking using computer vision algorithms',
      ],
      featured: false,
      demoLink: '#',
      githubLink: 'https://github.com/santhoshi02',
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-12 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my full-stack development work and technical projects
          </p>
        </div>

        <div ref={cardsRef} className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer ${
                project.featured
                  ? 'lg:p-10 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5'
                  : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 left-6 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="h-3 w-3 fill-current" />
                  Featured Project
                </div>
              )}

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="text-base text-muted-foreground font-medium">{project.role}</p>
                    )}
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                  {project.features.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1 text-base text-muted-foreground">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <Button
                    variant="default"
                    className="w-full cursor-pointer group/btn bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full cursor-pointer group/btn hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
