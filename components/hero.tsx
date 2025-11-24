'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Download, ArrowRight, MessageCircle } from 'lucide-react'
import { ThreeBackground } from '@/components/three-background'
import gsap from 'gsap'

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const summaryRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('[v0] Hero: Starting animations')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      )
      gsap.fromTo(
        summaryRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: 'power3.out' }
      )
      gsap.fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.7, ease: 'power3.out' }
      )
      gsap.fromTo(
        socialsRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, delay: 0.9, ease: 'power3.out' }
      )
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, delay: 0.4, ease: 'power3.out' }
      )
    })

    console.log('[v0] Hero: Animations initialized')
    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = () => {
    // Replace with actual resume link
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Santhoshi Derangula
            </h1>
            
            <h2
              ref={subtitleRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary"
            >
              Java Developer & Full Stack Developer
            </h2>

            <p
              ref={summaryRef}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Passionate Computer Science graduate specializing in Java and full-stack web development with expertise in AI/ML. 
              Skilled in building robust applications with modern technologies and frameworks.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="cursor-pointer group bg-primary hover:bg-primary/90 text-primary-foreground px-9 py-7 text-lg sm:text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30 dark:hover:text-background"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="cursor-pointer group bg-secondary hover:bg-secondary/90 text-secondary-foreground px-9 py-7 text-lg sm:text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/30 dark:hover:text-background"
              >
                Keep in touch
                <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="cursor-pointer group hover:bg-accent hover:text-accent-foreground px-9 py-7 text-lg sm:text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg border-2 dark:hover:border-primary dark:hover:bg-primary/20"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button> */}
            </div>

            <div ref={socialsRef} className="flex gap-6 justify-center lg:justify-start pt-6">
              <a
                href="mailto:santhoshiderangula22@gmail.com"
                className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110"
              >
                <Mail className="h-6 w-6" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/santhoshi-derangula-399b362b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/santhoshi02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-all cursor-pointer hover:scale-110"
              >
                <Github className="h-6 w-6" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-pulse" />
              <div className="relative bg-card/60 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-2 shadow-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-primary/20 hover:scale-105">
                <img
                  src="profile-pic.jpeg"
                  alt="Santhoshi Derangula"
                  className="rounded-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section (integrated into hero) */}
      <div id="about" className="absolute bottom-0 left-0 right-0 h-1" />
    </section>
  )
}
