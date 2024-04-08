import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Work from './components/Work'
import Homepage from "./components/Homepage"
import Notfound from "./components/Notfound"
function App() {  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
