import React, { useState } from "react";
import '../Style/About1Game.css';
import { FaFire } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import { GiGamepad } from "react-icons/gi";
import { MdAdsClick } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { GiGhost } from "react-icons/gi";
import { GiDrippingSword } from "react-icons/gi";
import { FaGun } from "react-icons/fa6";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaVolleyballBall } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";
const categories = [
  { name: "Action", icon:<FaFire /> },
  { name: "Adventure", icon:<IoIosBookmarks /> },
  { name: "Arcade", icon:<GiGamepad /> },
  { name: "Clicker", icon:<MdAdsClick />},
  { name: "Driving", icon:<FaCarOn /> },
  { name: "Horror", icon:<GiGhost /> },
  { name: ".io", icon:<GiDrippingSword /> },
  { name: "Shooter", icon:<FaGun /> },
  { name: "Puzzle", icon:<IoExtensionPuzzleOutline /> },
  { name: "Sports", icon: <FaVolleyballBall /> },
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
          <button className="prev-btn" onClick={handlePrev} disabled={startIndex === 0}><IoChevronBack /></button>
          <div className="category-list">
            {visibleCategories.map((category, index) => (
              <div key={index} className="category-item">
                <span className="icon">{category.icon}</span>
                <span className="name">{category.name}</span>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext} disabled={startIndex + 6 >= categories.length}><GrNext /></button>
        </div>
      </div>
    </div>
  );
};
export default About1Games;
