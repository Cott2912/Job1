import React from "react";
import './GameCard.css';
const GameCard = ({ game, onSelect }) => {
  return (
    <div className="game-card" onClick={onSelect}>
      <h3>{game.name}</h3>
      <p> {game.category}</p>
    </div>
  );
};

export default GameCard; 