import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Style/GameDetailPage.css';
import Add from "../Components/Add";
import Button from "../Components/ButtonDisplay";
import GameLinkComponent from "../Components/GameLinkComponent";
import Sidebar from "../Components/SideBar";
import { games } from "../Components/News";
import { getRandomGames } from "../Components/1Line";

const GameDetailPage = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(games.find(g => g.id === parseInt(gameId)) || null);
  }, [gameId]);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="game-detail-page">
        {game ? (
          <div className="game-container">
            <img
              src={game.imageUrl}
              alt={game.name}
              className="game-image-detail"
            />
            {/* <h2 className="game-title-detail">{game.name}</h2> */}
          </div>
        ) : (
          <p className="not-found-text">Game Not Found</p>
        )}
        <Add />
        <Button />
        <GameLinkComponent />
      </div>
    </>
  );
};

export default GameDetailPage;
