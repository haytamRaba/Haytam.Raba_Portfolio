import React from 'react'
import './Projects.css'
import ShowcaseCard from '../../ui/ShowcaseCard/ShowcaseCard'
import { projects } from '../../../data/projects'

const Projects = () => {
  return (
    <div className="projects-section">

        <h1 className="bottom-title"># Projects</h1>
<div className="skills-decor">
        <div className="dot-grid"></div>
        <div className="dot-grid"></div>
      </div>
        
        <div className="projects-grid">
         {projects.map(p => <ShowcaseCard key={p.title} {...p} />)}
        </div>
    </div>
  )
}

export default Projects

