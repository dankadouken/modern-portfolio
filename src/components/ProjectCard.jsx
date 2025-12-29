import React from 'react'
import { Github, ExternalLink, Cloud } from 'lucide-react'
import { techColors } from '../data/techColors'

const platformColors = {
  "Firebase": "bg-orange-500 hover:bg-orange-600",
  "DigitalOcean": "bg-blue-600 hover:bg-blue-700",
  "Vercel": "bg-black hover:bg-gray-900 border border-white/20",
  "Railway": "bg-purple-600 hover:bg-purple-700",
  "AWS Amplify": "bg-orange-600 hover:bg-orange-700",
  "Netlify": "bg-teal-500 hover:bg-teal-600"
}

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

      {project.deployments && (
        <div className="mb-4 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Cloud className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              Deployed on {project.deployments.length} platforms:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.deployments.map((deployment) => (
              <a
                key={deployment.platform}
                href={deployment.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 text-xs font-semibold text-white rounded-md transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 ${
                  platformColors[deployment.platform] || 'bg-gray-600 hover:bg-gray-700'
                }`}
              >
                {deployment.platform}
              </a>
            ))}
          </div>
        </div>
      )}

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
