// import React, { useState } from "react";
// import './News.css';
// import { useNavigate } from "react-router-dom"; // Dùng để điều hướng
// const games = [
//   { id: 1, name: "Game 1", url: "https://1games.io/game1" },
//   { id: 2, name: "Game 2", url: "https://1games.io/game2" },
//   { id: 3, name: "Game 3", url: "https://1games.io/game3" },
//   { id: 4, name: "Game 4", url: "https://1games.io/game4" },
//   { id: 5, name: "Game 5", url: "https://1games.io/game5" },
//   { id: 6, name: "Game 6", url: "https://1games.io/game6" },
//   { id: 7, name: "Game 7", url: "https://1games.io/game7" },
//   { id: 8, name: "Game 8", url: "https://1games.io/game8" },
//   { id: 9, name: "Game 9", url: "https://1games.io/game9" },
//   { id: 10, name: "Game 10", url: "https://1games.io/game10" },
//   { id: 11, name: "Game 11", url: "https://1games.io/game11" },
//   { id: 12, name: "Game 12", url: "https://1games.io/game12" },
//   { id: 13, name: "Game 13", url: "https://1games.io/game13" },
//   { id: 14, name: "Game 14", url: "https://1games.io/game14" },
//   { id: 15, name: "Game 15", url: "https://1games.io/game15" },
//   { id: 16, name: "Game 16", url: "https://1games.io/game16" },
//   { id: 17, name: "Game 17", url: "https://1games.io/game17" },
//   { id: 18, name: "Game 18", url: "https://1games.io/game18" },
//   { id: 19, name: "Game 19", url: "https://1games.io/game19" },
//   { id: 20, name: "Game 20", url: "https://1games.io/game20" },
//   { id: 21, name: "Game 21", url: "https://1games.io/game21" },
//   { id: 22, name: "Game 22", url: "https://1games.io/game22" },

// ];

// const News = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const visibleGames = games.slice(startIndex, startIndex + 12);

//   const handleNext = () => {
//     if (startIndex + 12 < games.length) setStartIndex(startIndex + 6); 
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) setStartIndex(startIndex - 6);
//   };

//   return (
//     <div className="news-section">
//       <div className="game-container">
//         {startIndex > 0 && (
//           <button className="prev-btn" onClick={handlePrev}>◀</button>
//         )}

//         <div className="game-list">
//           {visibleGames.map((game) => (
//             <div key={game.id} className="game-card">
//               <iframe src={game.url} width="200" height="150" title={game.name}></iframe>
//               <p>{game.name}</p>
//             </div>
//           ))}
//         </div>

//         {startIndex + 12 < games.length && (
//           <button className="next-btn" onClick={handleNext}>▶</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default News;

import React, { useState } from "react";
import './News.css';
import { useNavigate } from "react-router-dom"; // Dùng để điều hướng

const games = [
  { id: 1, name: "Game 1", url: "https://1games.io/game1" },
  { id: 2, name: "Game 2", url: "https://1games.io/game2" },
  { id: 3, name: "Game 3", url: "https://1games.io/game3" },
  { id: 4, name: "Game 4", url: "https://1games.io/game4" },
  { id: 5, name: "Game 5", url: "https://1games.io/game5" },
  { id: 6, name: "Game 6", url: "https://1games.io/game6" },
  { id: 7, name: "Game 7", url: "https://1games.io/game7" },
  { id: 8, name: "Game 8", url: "https://1games.io/game8" },
  { id: 9, name: "Game 9", url: "https://1games.io/game9" },
  { id: 10, name: "Game 10", url: "https://1games.io/game10" },
  { id: 11, name: "Game 11", url: "https://1games.io/game11" },
  { id: 12, name: "Game 12", url: "https://1games.io/game12" },
  { id: 13, name: "Game 13", url: "https://1games.io/game13" },
  { id: 14, name: "Game 14", url: "https://1games.io/game14" },
  { id: 15, name: "Game 15", url: "https://1games.io/game15" },
  { id: 16, name: "Game 16", url: "https://1games.io/game16" },
  { id: 17, name: "Game 17", url: "https://1games.io/game17" },
  { id: 18, name: "Game 18", url: "https://1games.io/game18" },
  { id: 19, name: "Game 19", url: "https://1games.io/game19" },
  { id: 20, name: "Game 20", url: "https://1games.io/game20" },
  { id: 21, name: "Game 21", url: "https://1games.io/game21" },
  { id: 22, name: "Game 22", url: "https://1games.io/game22" },
];

const News = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleGames = games.slice(startIndex, startIndex + 12);
  const navigate = useNavigate();

  const handleNext = () => {
    if (startIndex + 12 < games.length) setStartIndex(startIndex + 6); 
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 6);
  };

  return (
    <div className="news-section">
      <div className="game-container">
        {startIndex > 0 && (
          <button className="prev-btn" onClick={handlePrev}>◀</button>
        )}

        <div className="game-list">
          {visibleGames.map((game) => (
            <div
              key={game.id}
              className="game-card"
              onClick={() => navigate(`/game/${game.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <iframe
                src={game.url}
                width="200"
                height="150"
                title={game.name}
              ></iframe>
              <p>{game.name}</p>
            </div>
          ))}
        </div>

        {startIndex + 12 < games.length && (
          <button className="next-btn" onClick={handleNext}>▶</button>
        )}
      </div>
    </div>
  );
};

export default News;
