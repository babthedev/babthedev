// import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { Element, Events, scrollSpy } from 'react-scroll'
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect } from "react"
function App() {  
  useEffect(()=>{
    Events.scrollEvent.register('begin', 
    function () {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', 
    function () {
      console.log('end', arguments);
    });
    scrollSpy.update();
    return ()=>{
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter> */}
    <Element name='home'>
    <Home/>
    </Element>
    <Element name='projects'>
    <Projects/>
    </Element>
    <Element name='about'>
    <About id='about'/>
    </Element>
    <Element name='contact'>
    <Contact/>
    </Element>
    <Element name='footer'>
    <Footer/>
    </Element>
    </>
  )
}

export default App
