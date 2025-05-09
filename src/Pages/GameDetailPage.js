import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./GameDetailPage.css";
import Add from "../Components/Add";
import Button from "../Components/ButtonDisplay";
import About1Games from "../Components/About1Game";
import CommentList from "../Components/CommentList";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
const gameData = {
  1: { name: "Game 1",  description: "Trò chơi hành động kịch tính!", iframeUrl: "https://1games.io/wyrmdash" },
  2: { name: "Game 2",  description: "Trò chơi trí tuệ đầy thử thách!", iframeUrl: "https://1games.io/game2" },
  3: { name: "Game 3",  description: "Game phiêu lưu với thế giới mở!", iframeUrl: "https://1games.io/game3" },
  4: { name: "Game 4",  description: "Chiến thuật đỉnh cao!", iframeUrl: "https://1games.io/game4" },
  5: { name: "Game 5",  description: "Game giải đố siêu hack não!", iframeUrl: "https://1games.io/game5" },
  6: { name: "Game 6",  description: "Game nhập vai hoành tráng!", iframeUrl: "https://1games.io/game6" },
  7: { name: "Game 7", description: "Game thể thao hấp dẫn!", iframeUrl: "https://1games.io/game7" },
  8: { name: "Game 8", description: "Bắn súng gay cấn!", iframeUrl: "https://1games.io/game8" },
  9: { name: "Game 9",  description: "Game mô phỏng thực tế!", iframeUrl: "https://1games.io/game9" },
  10: { name: "Game 10",  description: "Trải nghiệm âm nhạc sống động!", iframeUrl: "https://1games.io/game10" },
  11: { name: "Game 11",  description: "Game đua xe tốc độ cao!", iframeUrl: "https://1games.io/game11" },
  12: { name: "Game 12",  description: "Chiến tranh không khoan nhượng!", iframeUrl: "https://1games.io/game12" },
  13: { name: "Game 13",  description: "Thế giới kỳ ảo đầy màu sắc!", iframeUrl: "https://1games.io/game13" },
  14: { name: "Game 14",  description: "Game sinh tồn nghẹt thở!", iframeUrl: "https://1games.io/game14" },
  15: { name: "Game 15",  description: "Chiến đấu theo lượt hấp dẫn!", iframeUrl: "https://1games.io/game15" },
  16: { name: "Game 16",  description: "Trò chơi chiến thuật thời gian thực!", iframeUrl: "https://1games.io/game16" },
  17: { name: "Game 17", description: "Game nhịp điệu vui nhộn!", iframeUrl: "https://1games.io/game17" },
  18: { name: "Game 18",  description: "Game quản lý thành phố!", iframeUrl: "https://1games.io/game18" },
  19: { name: "Game 19", description: "Chiến tranh vũ trụ!", iframeUrl: "https://1games.io/game19" },
  20: { name: "Game 20", description: "Hành động tốc độ cao!", iframeUrl: "https://1games.io/game20" },
  21: { name: "Game 21", description: "Game xây dựng hấp dẫn!", iframeUrl: "https://1games.io/game21" },
  22: { name: "Game 22", description: "Game mini giải trí đơn giản!", iframeUrl: "https://1games.io/game22" },
};

// const GameDetailPage = () => {
//   const { gameId } = useParams();
//   const [game, setGame] = useState(null);

//   useEffect(() => {
//     setGame(gameData[gameId] || null);
//   }, [gameId]);

//   return (
//     <div className="game-detail-page">
//       {game ? (
//         <>
//           <h2>{game.name}</h2>
//           <img src={game.image} alt={game.name} className="game-cover" />
//           <p>{game.description}</p>
//           <iframe
//             src={game.iframeUrl}
//             className="game-frame"
//             allowFullScreen
//             title={game.name}
//           ></iframe>
//         </>
//       ) : (
//         <p>Not Found</p>
//       )}
//       <Add/>
//       <Button/>
//       <About1Games/>
//       <CommentList/>
      
      
//     </div>
//   );
// };

// export default GameDetailPage;
const GameDetailPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // 👉 Thêm state

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen); // 👉 Hàm toggle
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    setGame(gameData[gameId] || null);
  }, [gameId]);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} /> 
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} /> 

      <div className="game-detail-page">
        {game ? (
          <>
            <h2>{game.name}</h2>
            <img src={game.image} alt={game.name} className="game-cover" />
            <p>{game.description}</p>
            <iframe
              src={game.iframeUrl}
              className="game-frame"
              allowFullScreen
              title={game.name}
            ></iframe>
          </>
        ) : (
          <p>Not Found</p>
        )}
        <Add />
        <Button />
        <About1Games />
        <CommentList />
      </div>
    </>
  );
};

export default GameDetailPage;