import React from 'react'
import Hero from './Components/Hero'
import MyLearning from './Components/MyLearning'
import TechStack from './Components/TechStack'
import TrustSection from './Components/Testimonial'
import ProjectsCTA from './Components/Projects'
import ContactSection from './Components/Contact'


const Home = () => {
  return (
    <div>
      <Hero />
      <section>
        <MyLearning />
        <TechStack />
        <TrustSection />
        <ProjectsCTA />
        <ContactSection />
      </section>
      
    </div>
  )
}

export default Home