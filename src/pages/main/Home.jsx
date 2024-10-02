import React from 'react'
import Hero from '../../components/ui/Hero'
import Whychooseus from '../../components/ui/Whychooseus'
import Products from '../../components/ui/Products'
import ExperienceSection from '../../components/ui/ExperienceSection'
import Material from '../../components/ui/Material'
import Testmonial from '../../components/ui/Testmonial'
// import Shop from '../../components/ui/Shop'

const Home = () => {
  return (
    <div>
     <Hero />
     <Whychooseus />
     <Products headline="Best Selling Prodcuts"/>
     <ExperienceSection />
     <Material />
     <Testmonial />
    </div>
  )
}

export default Home
