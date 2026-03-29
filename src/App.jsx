import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#4f46e5] selection:text-white">
      <Header />
      <Hero />
      <Marquee />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
