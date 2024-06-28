import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Service from './Components/Service/Service'
import Gallery from './Components/Gallery/Gallery'
import Footer from './Components/Footer/Footer'


export default function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Service" element={<Service/>}/>
       <Route path="/Gallery" element={<Gallery/>}/>
       
       
       
     </Routes>
     <Footer/>

    
     </BrowserRouter>
   
    </>

    
  )
}
