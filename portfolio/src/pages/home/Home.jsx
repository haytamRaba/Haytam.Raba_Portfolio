import React from 'react'
import Navbar from '../../components/layout/navbar/Navbar'
import Hero from '../../components/sections/hero/Hero'
import Projects from '../../components/sections/Projects/Projects'
import Skills from '../../components/sections/skills/Skills'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
 
 
    </div>
  )
}

export default Home