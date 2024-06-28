import React from 'react'
import './Gallery.css'

export default function Gallery() {
  const coffeeImages = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbU2KU1KS3NuV3X7tWy3zNfLaRuCvQ9x0Xw&s', alt: 'Espresso', title: 'Espresso' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2B-AUZ5KEbJfskGz0uPw-JafgYARGxM4_Vw&s', alt: 'Latte', title: 'Latte' },
    { src: 'https://cdn.pixabay.com/photo/2024/01/19/13/41/cappuccino-8519098_1280.png', alt: 'Cappuccino', title: 'Cappuccino' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhrXJEo9Q-8I6oH7eMcIa03G31Uhmg94rig&s', alt: 'Americano', title: 'Americano' },
    { src: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-mocha-coffee-frappe-in-glass-png-image_13149034.png', alt: 'Mocha', title: 'Mocha' },
    { src: 'https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-watercolor-coffee-macchiato-png-image_11664557.png', alt: 'Macchiato', title: 'Macchiato' },
  ]

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Coffee Gallery</h1>
      <div className="gallery-grid">
        {coffeeImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="gallery-item-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}