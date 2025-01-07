import React from 'react'
import Home from './home/home'
import About from './about/about'
import Skills from './about/skills'
import Projects from './projects/projects'
import Footer from './footer/footer'
import InfoSections from './infoSection/infoSection'
import ScrollSkills from './about/scrollSkills'

export default function landingPage() {
  return (
    <div>
        <Home />
        <InfoSections />
        <About />
        <Skills />
        <ScrollSkills />
        <Projects />
        <Footer />
    </div>
  )
}
