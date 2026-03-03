import React from 'react'
import Navbar from '../../components/layout/navbar/Navbar'
import Hero from '../../components/sections/hero/Hero'
import Projects from '../../components/sections/Projects/Projects'
import Skills from '../../components/sections/skills/Skills'
import Certifications from '../../components/sections/Certifications/Certifications'
import About from '../../components/sections/About/About'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <About/>
 
 
    </div>
  )
}

export default Home