import React from 'react'
import './Service.css'


export default function Service() {
  return (
    
      <div className="coffee-service-container">
    <h1 className="coffee-service-title">Our Coffee Services</h1>
    <div className="coffee-service-grid">
      <div className="coffee-card">
        <i className="fas fa-mug-hot coffee-icon"></i>
        <h2>Espresso Bar</h2>
        <p>Handcrafted espresso drinks</p>
      </div>
      <div className="coffee-card">
        <i className="fas fa-mortar-pestle coffee-icon"></i>
        <h2>Bean Grinding</h2>
        <p>Fresh ground coffee to order</p>
      </div>
      <div className="coffee-card">
        <i className="fas fa-truck coffee-icon"></i>
        <h2>Coffee Delivery</h2>
        <p>Beans delivered to your doorstep</p>
      </div>
      <div className="coffee-card">
        <i className="fas fa-chalkboard-teacher coffee-icon"></i>
        <h2>Brewing Classes</h2>
        <p>Learn the art of coffee brewing</p>
      </div>
    </div>
  </div>
      
    
  )
}



  