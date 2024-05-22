import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero/Hero'
import Gallery from './assets/components/Gallery/Gallery'
import About from './assets/components/About/About'
import Products from './assets/components/Products/Products'
import Food from './assets/components/Food/Food'
import Footer from './assets/components/Footer/Footer'
import Review from './assets/components/Review/Review'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallery/>
      <Products/>
      <Food/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App