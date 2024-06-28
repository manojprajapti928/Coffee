import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Coffee</h1>
      <p>Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. It is one of the most popular drinks in the world and can be prepared and presented in a variety of ways.</p>
      <h2>History</h2>
      <p>Coffee cultivation and trade began on the Arabian Peninsula. By the 15th century, coffee was being grown in the Yemeni district of Arabia and by the 16th century, it was known in Persia, Egypt, Syria, and Turkey.</p>
      <h2>Types of Coffee</h2>
      <ul>
        <li>Espresso</li>
        <li>Americano</li>
        <li>Latte</li>
        <li>Cappuccino</li>
        <li>Macchiato</li>
        <li>Mocha</li>
      </ul>
    </div>
  );
}
