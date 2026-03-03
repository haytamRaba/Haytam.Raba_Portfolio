import React from 'react'
import './About.css'
import TextGenerateEffect from '../../ui/text-generate-effect/TextGenerateEffect'

const About = () => {
  return (
    <div className='about-section'>
      <h1>#About Me</h1>
      <h2>Hello , I'm Haytam!</h2>
      <TextGenerateEffect
        words="A Software Engineering student driven by the ambition to build structured, scalable, and impactful digital solutions."
        baseDelay={0}
      />

      <TextGenerateEffect
        words="For me, software engineering is not just about writing code. It's about understanding how systems are designed, how components integrate, and how to build solutions that remain reliable as they grow. I'm particularly interested in architecture, performance, and the logic behind well-structured enterprise environments."
        baseDelay={0.8}
      />

      <TextGenerateEffect
        words="Through academic projects, freelance work, and teaching experience, I've developed strong problem-solving skills and a structured way of thinking. Teaching has strengthened my ability to simplify complex concepts, while building real projects has taught me the importance of clarity, maintainability, and efficiency."
        baseDelay={2.6}
      />

      <TextGenerateEffect
        words="I'm continuously learning and refining my skills, with a goal of becoming an engineer capable of contributing to large-scale systems and meaningful digital transformation."
        baseDelay={4.1}
      />

      <div className='skills-highlight'>
        <h3>Core Focus Areas</h3>
        <ul>
          <li>System Architecture & Design</li>
          <li>Full-Stack Development</li>
          <li>Problem Solving</li>
        </ul>
      </div>

      <div className='philosophy'>
        <p><strong>Build with structure. Keep improving.</strong></p>
      </div>

      <div className='about-cta'>
        <a href='#contact' className='cta-button secondary'>Get In Touch</a>
      </div>
    </div>
  )
}

export default About