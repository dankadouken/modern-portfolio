import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a full-stack developer and DevOps engineer who builds and deploys web applications using modern cloud platforms.
          </p>
          
          <p>
            As a U.S. Army veteran transitioning into tech, I bring discipline, problem-solving skills, and a commitment to delivering reliable solutions. Through my business, WNP Web Development Brokerage, I've deployed applications on AWS, automated CI/CD pipelines, and reduced deployment times by 30%.
          </p>
          
          <p>
            I'm passionate about building tools that solve real problems. Whether it's creating a React frontend, designing a MySQL database, or setting up cloud infrastructure on AWS or GCP, I focus on writing clean code and shipping products that work.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-sm">React, Node.js, MySQL, MongoDB</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-semibold text-foreground mb-2">Cloud & DevOps</h3>
              <p className="text-sm">AWS (EC2, S3, Lambda), GCP, CI/CD pipelines</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">🎖️</div>
              <h3 className="font-semibold text-foreground mb-2">Military Background</h3>
              <p className="text-sm">U.S. Army veteran with Secret Security Clearance</p>
            </div>
          </div>

          <p>
            Currently, I'm working on freelance projects, teaching MySQL, and looking for opportunities to contribute to a team building impactful software.
          </p>
        </div>
      </div>
    </section>
  )
}

