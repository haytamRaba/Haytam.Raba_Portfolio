import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      date: 'January 2025',
      skills: ['Cloud Architecture', 'AWS Services', 'Infrastructure'],
      link: 'https://aws.amazon.com/certification/'
    },
    {
      id: 2,
      name: 'Full Stack Web Development',
      date: 'November 2024',
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      link: 'https://example.com/cert'
    },
    {
      id: 3,
      name: 'Docker & Kubernetes',
      date: 'September 2024',
      skills: ['Containerization', 'Orchestration', 'DevOps'],
      link: 'https://example.com/cert'
    },
    {
      id: 4,
      name: 'JavaScript Algorithms',
      date: 'July 2024',
      skills: ['Data Structures', 'Problem Solving', 'Optimization'],
      link: 'https://example.com/cert'
    },
    {
      id: 5,
      name: 'System Design Fundamentals',
      date: 'May 2024',
      skills: ['Scalability', 'Microservices', 'Database Design'],
      link: 'https://example.com/cert'
    },
    {
      id: 6,
      name: 'Git & Version Control',
      date: 'March 2024',
      skills: ['Git', 'CI/CD', 'Team Collaboration'],
      link: 'https://example.com/cert'
    }
  ]

  return (
    <div className='certifications-section'>
      <h2>#Certifications</h2>
      <div className='certifications-grid'>
        {certifications.map((cert) => (
          <div key={cert.id} className='cert-card'>
            <div className='cert-mini'>
              <h3>{cert.name}</h3>
            </div>
            <div className='cert-expanded'>
              <div className='cert-header'>
                <h3>{cert.name}</h3>
                <span className='cert-date'>{cert.date}</span>
              </div>
              <div className='cert-skills'>
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className='skill-tag'>{skill}</span>
                ))}
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='cert-link'
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications