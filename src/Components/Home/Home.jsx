import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Coffee Shop</h1>
        <p>Experience the best coffee in town</p>
      </header>
      <section className="home-content">
        <div className="home-intro animate__fadeIn">
          <h2>Our Story</h2>
          <p>
            We started our journey with a simple goal: to provide the finest coffee experience. Our passion for coffee drives us to source the best beans and craft each cup with love.
          </p>
        </div>
        <div className="home-gallery animate__fadeIn">
          <h2>Coffee</h2>
          <div className="gallery-images">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/027/182/233/small_2x/cup-of-black-coffee-with-coffee-beans-top-view-isolated-on-a-transparent-background-png.png" alt="Coffee 1" className="animate__zoomIn" />
            <img src="https://pngimg.com/d/mug_coffee_PNG16824.png" alt="Coffee 2" className="animate__zoomIn" />
            <img src="https://png.pngtree.com/png-vector/20230414/ourmid/pngtree-coffee-coffee-cup-top-view-png-image_6695188.png" alt="Coffee 3" className="animate__zoomIn" />
          </div>
        </div>
        
      </section>
    </div>
  );
}
