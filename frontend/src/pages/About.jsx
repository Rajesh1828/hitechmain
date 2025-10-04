import React from 'react'
import AboutHero from '../components/AboutComponets/AboutHero/AboutHero'
import AboutContent from '../components/AboutComponets/AboutContent/AboutContent'
import Why from '../components/AboutComponets/why/Why'
import Testimonial from '../components/AboutComponets/Testimonial/Testimonial'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutContent/>
      <Why/>  
      <Testimonial/>
    </div>
  )
}

export default About