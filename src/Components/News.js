import React, { useState } from "react";
import '../Style/News.css';
import { useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";

const games = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Game ${i + 1}`,
  url: `https://1games.io/game${i + 1}`,
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
              <iframe src={game.url} title={game.name} allowFullScreen></iframe>
              <div className="game-info">{game.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
