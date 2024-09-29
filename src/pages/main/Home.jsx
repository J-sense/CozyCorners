import React from 'react'
import Hero from '../../components/ui/Hero'
import Whychooseus from '../../components/ui/Whychooseus'
import Products from '../../components/ui/Products'
// import Shop from '../../components/ui/Shop'

const Home = () => {
  return (
    <div>
     <Hero />
     <Whychooseus />
     <Products headline="Best Selling Prodcuts"/>
    </div>
  )
}

export default Home
