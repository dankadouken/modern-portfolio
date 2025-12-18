import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Joshua</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
          a Full-Stack DevOps Engineer
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground px-4">
          I specialize in building and deploying scalable full-stack applications using{' '}
          <span className="text-cyan-400 font-semibold">React</span>,{' '}
          <span className="text-green-400 font-semibold">Node.js</span>,{' '}
          <span className="text-blue-400 font-semibold">MySQL</span>,{' '}
          <span className="text-pink-400 font-semibold">MongoDB</span>, and cloud platforms like{' '}
          <span className="text-orange-400 font-semibold">AWS</span>,{' '}
          <span className="text-yellow-400 font-semibold">Firebase</span>, and{' '}
          <span className="text-purple-400 font-semibold">GCP</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  )
}