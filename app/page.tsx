'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Certificates } from '@/components/certificates'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </main>
  )
}
