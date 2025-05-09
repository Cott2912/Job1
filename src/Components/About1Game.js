import React, { useState } from "react";
import './About1Game.css';

const categories = [
  { name: "Action", icon: "🔥" },
  { name: "Adventure", icon: "🗺️" },
  { name: "Arcade", icon: "🎮" },
  { name: "Clicker", icon: "🖱️" },
  { name: "Driving", icon: "🚗" },
  { name: "Horror", icon: "👻" },
  { name: ".io", icon: "⚔️" },
  { name: "Shooter", icon: "🔫" },
  { name: "Puzzle", icon: "🧩" },
  { name: "Sports", icon: "⚽" },
];

const About1Games = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCategories = categories.slice(startIndex, startIndex + 6);

  const handleNext = () => {
    if (startIndex + 6 < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About 1Games</h2>
        <p>
          Discover a world of free games on 1Games, a multi-genre platform offering the latest and greatest games.
          Enjoy a wide array of online games completely free of charge!
        </p>
      </div>
      <div className="category-container">
        <div className="category-scroll-wrapper">
          <button className="prev-btn" onClick={handlePrev} disabled={startIndex === 0}>◀</button>

          <div className="category-list">
            {visibleCategories.map((category, index) => (
              <div key={index} className="category-item">
                <span className="icon">{category.icon}</span>
                <span className="name">{category.name}</span>
              </div>
            ))}
          </div>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={startIndex + 6 >= categories.length}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default About1Games;
