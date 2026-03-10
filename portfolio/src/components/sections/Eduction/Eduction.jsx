import React from 'react'
import { ScrollTimeline } from '../../lightswind/scroll-timeline'
import './Eduction.css'

const educationEvents = [
  {
    year: '2023 - Present',
    title: 'Software & Network Engineering',
    subtitle: 'EMSI Casablanca – Engineering Cycle',
    description:
      'Studying advanced software engineering, networking, system architecture, and software design while developing academic and personal projects in C, C++, and web technologies.',
  },
  {
    year: '2022 - 2023',
    title: 'Computer Science Foundations',
    subtitle: 'Preparatory Engineering Studies',
    description:
      'Built strong fundamentals in programming, algorithms, databases, and object-oriented programming while beginning to explore software engineering concepts.',
  },
  {
    year: '2022 - Present',
    title: 'Self-Driven Development Projects',
    subtitle: 'GitHub & Personal Portfolio',
    description:
      'Developing personal projects including web applications and C++ programs while learning front-end technologies (HTML, CSS, JavaScript) and improving software design skills.',
  },
  {
    year: '2021 - 2022',
    title: 'Introduction to Programming',
    subtitle: 'Self-Learning Journey',
    description:
      'Started learning programming fundamentals and computer science basics, discovering interest in software engineering and technology development.',
  },
]

const Eduction = () => {
  return (
    <section className='education-section'>
      <h1 className="bottom-title"># Carreer Path</h1>
      <ScrollTimeline
        events={educationEvents}
        title='Education & Experience'
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