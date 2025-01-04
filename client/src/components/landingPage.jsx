import React from 'react'
import Home from './home/home'
import About from './about/about'
import Skills from './about/skills'
import Projects from './projects/projects'
import Footer from './footer/footer'

export default function landingPage() {
  return (
    <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  )
}
