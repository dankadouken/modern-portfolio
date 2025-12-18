// Skills.jsx - Skills section component
// Displays technical proficiency with visual progress bars

import React from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  return (
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
  )
}
