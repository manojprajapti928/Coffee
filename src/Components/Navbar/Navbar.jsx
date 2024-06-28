import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"



export default function Navbar() {
  return (
    <>

    
    <div className='navbar'>
     <div className='img' > <img src="https://pngfre.com/wp-content/uploads/1000070510-262x300.png" />
     <h3>Coffee</h3></div>
      

     <div className='main'>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/service">Service</Link>
      <Link to = "/gallery">Gallery</Link>
      <Link to = "/Contact">Contact</Link>
     

      </div>

      
    </div>
    </>
  )
}
