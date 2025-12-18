// ProjectCard.jsx - Individual project card component
// Reusable card for displaying project information

import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { techColors } from '../data/techColors'

export default function ProjectCard({ project }) {
  return (
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
  )
}
