
Contact.jsx
// Contact.jsx - Contact section component
// Contact information and social links

import React from 'react'
import { Button } from './ui/button'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interested in working together or have questions? Reach out and I'll respond promptly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">dankadouken2222@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">(254) 350-9369</p>
          </div>

          {/* GitHub */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground text-sm">github.com/dankadouken</p>
          </div>

          {/* LinkedIn */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm">linkedin.com/in/joshua-hammond</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-5 h-5" />
          <span>Dallas, TX</span>
        </div>

        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          onClick={() => window.open('mailto:dankadouken2222@gmail.com', '_blank')}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact Me
        </Button>
      </div>
    </section>
  )
}