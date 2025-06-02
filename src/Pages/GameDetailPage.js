import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Style/GameDetailPage.css';
import Add from "../Components/Add";
import Button from "../Components/ButtonDisplay";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import GameLinkComponent from "../Components/GameLinkComponent";

const games = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  iframeUrl: `https://1games.io/game${i + 1}`
}));
const GameDetailPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    setGame(games.find(g => g.id === parseInt(gameId)) || null);
  }, [gameId]);
  return (
    <>
      {/* <Header toggleSidebar={toggleSidebar} /> */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <div className="game-detail-page">
        {game ? (
          <>
            <iframe
              src={game.iframeUrl}
              className="game-frame"
              allowFullScreen
              title={`Game ${game.id}`}
            ></iframe>
          </>)
          :
          (
            <p>Not Found</p>
          )}
        <Add />
        <Button />
        <GameLinkComponent />
      </div>
    </>
  );
};
export default GameDetailPage;
