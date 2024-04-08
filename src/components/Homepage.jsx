import React from 'react'
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from './Header'
const Homepage = () => {
  return (
    <>
    <Header/>
    <Home/>
    <About id='about'/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Homepage