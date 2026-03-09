import React from 'react'
import { ScrollTimeline } from '../../lightswind/scroll-timeline'
import './Eduction.css'

const educationEvents = [
  {
    year: '2023 - Present',
    title: 'Software & Network Engineering',
    subtitle: 'Specialized Engineering Program',
    description:
      'Deepening my expertise in software architecture, network systems, and scalable development practices through academic and project-based work.',
  },
  {
    year: '2022 - 2023',
    title: 'Applied Computer Science Foundation',
    subtitle: 'Technology Preparatory Track',
    description:
      'Strengthened fundamentals in algorithms, databases, and object-oriented programming while building structured coding habits.',
  },
  {
    year: '2021 - 2022',
    title: 'Independent Full-Stack Learning',
    subtitle: 'Project-Led Training',
    description:
      'Built practical web projects with React, APIs, and backend services to bridge theory and real-world implementation.',
  },
  {
    year: '2020 - 2021',
    title: 'Web Development Fundamentals',
    subtitle: 'Self-Paced Technical Track',
    description:
      'Started my development journey by learning HTML, CSS, and JavaScript, focusing on clean structure and responsive interfaces.',
  },
]

const Eduction = () => {
  return (
    <section className='education-section'>
      <ScrollTimeline
        events={educationEvents}
        title='#CarreerPath'
        subtitle='Scroll to explore my academic and technical journey'
        progressIndicator={false}
        cardAlignment='alternating'
        revealAnimation='fade'
        connectorStyle='line'
        lineColor='bg-transparent'
        cardVariant='outlined'
        cardEffect='shadow'
        dateFormat='badge'
        className='education-timeline-shell'
      />
    </section>
  )
}

export default Eduction