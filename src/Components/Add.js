import React from "react";
import "./Add.css"; 

const list = [
  { id: 1, name: "Game 1", url: "https://1games.io/game1" },
  { id: 2, name: "Game 2", url: "https://1games.io/game2" },
  { id: 3, name: "Game 3", url: "https://1games.io/game3"},
  { id: 4, name: "Game 4", url: "https://1games.io/game4" },
  { id: 5, name: "Game 5", url: "https://1games.io/game5" },
  { id: 6, name: "Game 6", url: "https://1games.io/game6" },
  { id: 7, name: "Game 7", url: "https://1games.io/game7" },
  { id: 8, name: "Game 8", url: "https://1games.io/game8" }
];
const Add = () => {
  return (
    <div className="game-list-n">
      {list.map(game => (
        <div key={game.id} className="game-card">   
          <img src={game.image} alt={game.name} className="game-thumbnail"/>
          <h3 className="game-title">{game.name}</h3>
          <a href={game.url} className="play-button">▶ Play</a>
        </div>
      ))}
    </div>
  );
};

export default Add;
