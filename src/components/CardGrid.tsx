import React from 'react';
import './CardGrid.css';

const CardGrid: React.FC = () => {
  return (
    <div className="card-grid">
      <div className="card">
        <h2>Welcome</h2>
        <p>Welcome to our application!</p>
      </div>
      <div className="card">
        <h2>Features</h2>
        <p>Explore the main features of our application.</p>
      </div>
      <div className="card">
        <h2>List Page</h2>
        <p>
          <a href="/list">Go to List Page</a>
        </p>
      </div>
      <div className="card">
        <h2>Contact</h2>
        <p>Contact us at contact@example.com or follow us on social media.</p>
      </div>
    </div>
  );
};

export default CardGrid;
