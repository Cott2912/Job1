import React, { useState } from "react";
import '../Style/News.css';
import { useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";

export const gameNames = [
  "Speed Legends", "Wacky Flip", "Geometry Lite", "Wave Dash", "Basketball Super", "Speed Start", "Curve Rush", " Italian Brainrot", "Crazy Cattle", "Escape Road", "Ragdoll Hit", "Chill Guy", "Spole 2", "Indoor Soccer", "Ragdoll Playground",
  "Crazy Animal", "Chicken Jockey", "Wyrmdash", "Fall Flat Battle", "Tap Road Beat", "Tap Road Beat", "Golf Git", "Tralalero Tralala", "REPO", "Gunspin", "2048", "Wordle", "Poor Tracks", "Snow Road 3D", "Snow Rider", "Monster Tracks"
];
export const games = gameNames.map((name, index) => ({
  id: index + 1,
  name: name,
  imageUrl: process.env.PUBLIC_URL + `/imagesG/Game${index + 1}.webp`,
}));

const News = ({ title }) => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const visibleGames = games.slice(startIndex, startIndex + 18);
  const handleNext = () => {
    if (startIndex + 18 < 30) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="news-section">
      <h1 className="highlight">{title}</h1>
      <div className="game-container">
        <div className="controls">
          {startIndex > 0 && <button className="prev-btn" onClick={handlePrev}><IoChevronBack /></button>}
          {startIndex + 18 < 30 && <button className="next-btn" onClick={handleNext}><GrNext /></button>}
        </div>
        <div className="game-list">
          {visibleGames.map((game) => (
            <div key={game.id} className="game-card" onClick={() => navigate(`/game/${game.id}`)}>
              <img src={game.imageUrl} alt={game.name} className="game-image" />
              <div className="game-info">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;

