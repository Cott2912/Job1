import React, { useState } from "react";
import "../Style/GameLinkComponent.css";

const GameLinkComponent = ({ gameNumber }) => {
  const gameUrl = `https://1games.io/`;
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const embedCode = `<iframe src="${gameUrl}" width="1280" height="720" scrolling="none" frameborder="0"></iframe>`;
  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };
  return (
    <div className="game-link-container">
      <div className="game-field">
        <label>Location</label>
        <input type="text" value={gameUrl} readOnly />
        <button
          className="open-btn"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.open(gameUrl, "_blank")}>OPEN</button>
      </div>

      <div className="game-field">
        <label>Embed</label>
        <input
          type="text"
          value={embedCode}
          readOnly
          className={copied ? "highlighted" : ""}
        />
        <button
         className="copy-btn" 
         onClick={handleCopy}>COPY</button>
      </div>
      {hovered && <div className="tooltip">{gameUrl}</div>}
    </div>
  );
};
export default GameLinkComponent;
