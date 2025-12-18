// Navigation.jsx - Navigation bar component
// Contains all navigation logic and UI

import React, { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'
import { scrollToSection } from '../utils/scrollToSection'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-500 rounded border-2 border-green-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">JH</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-blue-400' : 'text-foreground hover:text-blue-400'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-blue-400' : 'text-foreground hover:text-blue-400'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'projects' ? 'text-blue-400' : 'text-foreground hover:text-blue-400'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-blue-400' : 'text-foreground hover:text-blue-400'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/dankadouken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/joshua-hammond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
