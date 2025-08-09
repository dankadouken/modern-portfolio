import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Optimizer",
      description: "Automated AWS/GCP infrastructure optimization tool that reduces cloud costs by 22% through intelligent resource right-sizing and monitoring.",
      technologies: ["AWS", "Python", "Terraform", "Docker"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "DevOps Pipeline Automation",
      description: "CI/CD pipeline system that reduced deployment times by 30% using AWS EC2/S3 and Google Cloud Run with automated testing and monitoring.",
      technologies: ["AWS", "GCP", "Docker", "Jenkins"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Full-Stack Business Platform",
      description: "React-based business platform with Node.js backend that processes client data 40% faster with real-time analytics and reporting.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: true
    },
    {
      id: 4,
      title: "Military Asset Management System",
      description: "Comprehensive asset tracking system managing $2M+ in mission-critical equipment with 100% operational readiness tracking.",
      technologies: ["Java", "MySQL", "Spring Boot", "Docker"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: false
    },
    {
      id: 5,
      title: "WordPress Performance Optimizer",
      description: "WordPress optimization toolkit that improved client conversion rates by 30% and reduced load times by 45% through database optimization.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: false
    },
    {
      id: 6,
      title: "Agile Project Management Tool",
      description: "Custom project management solution with 100% on-time delivery tracking and automated reporting for cross-functional teams.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/dankadouken",
      liveUrl: "https://demo.example.com",
      featured: false
    }
  ]

  // Tech stack color mapping
  const techColors = {
    "AWS": "bg-orange-500",
    "GCP": "bg-blue-500",
    "React": "bg-cyan-500",
    "Node.js": "bg-green-500",
    "Python": "bg-yellow-500",
    "Java": "bg-red-500",
    "Docker": "bg-blue-600",
    "PostgreSQL": "bg-blue-700",
    "MySQL": "bg-orange-600",
    "JavaScript": "bg-yellow-400",
    "Terraform": "bg-purple-500",
    "Jenkins": "bg-gray-600",
    "WordPress": "bg-blue-800",
    "PHP": "bg-indigo-500",
    "MongoDB": "bg-green-600",
    "Express": "bg-gray-700",
    "Spring Boot": "bg-green-700"
  }

  const skills = [
    { name: "AWS (EC2, S3)", level: 85 },
    { name: "Google Cloud Run", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Docker", level: 70 },
    { name: "CI/CD Pipelines", level: 75 },
    { name: "DevOps", level: 80 },
    { name: "Project Management", level: 85 }
  ]

  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark')
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Circuit Board Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Joshua</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            a Cloud Solutions Engineer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground px-4">
            I specialize in architecting and deploying scalable cloud solutions using{' '}
            <span className="text-orange-400 font-semibold">AWS</span>,{' '}
            <span className="text-yellow-400 font-semibold">Python</span>,{' '}
            <span className="text-cyan-400 font-semibold">React</span>, and{' '}
            <span className="text-green-400 font-semibold">DevOps</span>.
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

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my technical implementations. Each project demonstrates problem-solving abilities and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-medium text-white rounded ${
                        techColors[tech] || 'bg-gray-500'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-green-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  <strong className="text-foreground">I help businesses achieve their goals by architecting and deploying scalable cloud solutions.</strong>
                </p>
                <p>
                  As a U.S. Army veteran with hands-on experience in both full-stack development and DevOps on AWS & GCP, I bridge the gap between complex technical capabilities and tangible business results.
                </p>
                <p>
                  I architect and optimize cloud infrastructure (AWS/GCP) while translating technical capabilities into business results. My hybrid experience combines:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <strong className="text-foreground">Full-Stack Development:</strong> Deployed scalable apps using JavaScript/React with 30% faster deployments via AWS EC2/S3 & Google Cloud Run
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚙️</span>
                    <div>
                      <strong className="text-foreground">DevOps Automation:</strong> Built CI/CD pipelines and monitoring systems to enhance reliability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎖️</span>
                    <div>
                      <strong className="text-foreground">Military Leadership:</strong> Managed $2M+ in mission-critical systems with Secret Security Clearance
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in working together or have questions? Reach out and I'll respond promptly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">joshua.hammond@email.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground">github.com/dankadouken</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/joshua-hammond</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => window.open('mailto:joshua.hammond@email.com', '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Joshua R. Hammond. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

