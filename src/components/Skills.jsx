// Skills.jsx - Skills section component
// Displays technical proficiency with visual progress bars

import React from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Proficiency levels based on real-world project experience and production deployments
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-card p-4 rounded-lg border border-border hover:border-blue-500/50 transition-all">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-blue-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
