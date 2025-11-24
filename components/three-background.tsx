'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

function ThreeBackgroundComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let THREE: any
    let scene: any
    let camera: any
    let renderer: any
    let particles: any
    let animationId: number

    const init = async () => {
      THREE = await import('three')

      if (!canvasRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 50

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)

      // Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 1000
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.3,
        color: 0xC4A7E7,
        transparent: true,
        opacity: 0.6,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)
        particles.rotation.y += 0.0005
        particles.rotation.x += 0.0002
        renderer.render(scene, camera)
      }

      animate()

      // Resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

export const ThreeBackground = dynamic(() => Promise.resolve(ThreeBackgroundComponent), {
  ssr: false,
})
