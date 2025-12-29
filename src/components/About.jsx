
About.jsx
import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a results-oriented Software Engineer with proven experience in designing, deploying, and optimizing robust, production-grade systems on AWS. I combine a strong foundation in backend development, database architecture, and DevOps with an entrepreneurial mindset adept at navigating ambiguous problem spaces to deliver reliable, scalable solutions.
          </p>
          
          <p>
            Through my work at ERA Solutions and as Founder of WNP Web Development Brokerage, I've architected and delivered over 10 custom software solutions for diverse clients. I've engineered automated CI/CD pipelines that reduced system rollout times by 30%, developed robust RESTful APIs using Node.js, and managed both NoSQL (MongoDB) and SQL databases with careful attention to schema design and data integrity.
          </p>
          
          <p>
            I'm eager to apply my deep understanding of data modeling and system infrastructure to the complex challenges of building AI and intelligence systems. Whether it's shipping full-stack cloud applications, optimizing deployment pipelines, or translating ambiguous business requirements into functional systems, I focus on delivering solutions that are both technically sound and business-ready.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-sm">React, Node.js, MySQL, MongoDB, RESTful APIs</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="font-semibold text-foreground mb-2">Cloud & DevOps</h3>
              <p className="text-sm">AWS (EC2, S3, Lambda), CI/CD Pipelines, GitLab</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl mb-3">🗄️</div>
              <h3 className="font-semibold text-foreground mb-2">Data & Architecture</h3>
              <p className="text-sm">Database Schema Design, Data Modeling, System Infrastructure</p>
            </div>
          </div>

          <p>
            Currently pursuing a Bachelor of Science in Business Marketing with a Minor in Computer Science at Park University (Expected May 2026), I'm also teaching MySQL and actively seeking opportunities to contribute to teams building impactful software and AI systems.
          </p>
        </div>
      </div>
    </section>
  )
}