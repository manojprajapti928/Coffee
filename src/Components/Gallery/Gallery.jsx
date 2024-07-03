import React from 'react'
import './Gallery.css'

export default function Gallery() {
  const coffeeImages = [
    { src: 'https://png.pngtree.com/png-clipart/20231021/original/pngtree-espresso-coffee-isolated-illustration-ai-generative-png-image_13393912.png', alt: 'Espresso', title: 'Espresso' },
    { src: 'https://png.pngtree.com/png-clipart/20231002/original/pngtree-top-view-of-a-mug-of-latte-art-coffee-on-timber-png-image_13067750.png', alt: 'Latte', title: 'Latte' },
    { src: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-coffee-object-cappuccino-coffee-illustration-3d-png-image_13139619.png', alt: 'Cappuccino', title: 'Cappuccino' },
    { src: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-americano-coffee-beans-transparent-white-background-png-image_6698453.png', alt: 'Americano', title: 'Americano' },
    { src: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-mocha-coffee-frappe-in-glass-png-image_13149034.png', alt: 'Mocha', title: 'Mocha' },
    { src: 'https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-watercolor-coffee-macchiato-png-image_11664557.png', alt: 'Macchiato', title: 'Macchiato' },
    { src: 'https://static.vecteezy.com/system/resources/thumbnails/037/280/520/small_2x/ai-generated-black-tea-held-in-a-glass-isolated-on-transparent-background-free-png.png',alt:'Black Tea', title: 'Black tea'},
    { src: 'https://pngimg.com/d/tea_PNG16895.png',alt:'Herbal Tea', title: 'Herbal Tea'},
   
  ];

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