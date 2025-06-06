import React, { useContext } from "react";
import "../Style/Header.css";
import { GrUpdate } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShuffle, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "./Themecontext";
import { NavLink } from "react-router-dom";
import { games } from "./News";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Header = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const foundGame = games.find((game) => game.name.toLowerCase() === searchTerm.toLowerCase());

    if (foundGame) {
      navigate(`/game/${foundGame.id}`);
    } else {
      navigate(`/no-result?query=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm("");

  };
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <RiMenu4Line />
      </div>
      <NavLink to="/1Game.io" className="logo">1GAMES.IO</NavLink>
      <nav className="nav-links">
        {[{ icon: <GrUpdate />, path: "/updated", label: "Updated" },
        { icon: <IoIosTrendingUp />, path: "/trending", label: "Trending" },
        { icon: <FaRegStar />, path: "/newgame", label: "New Games" }
        ].map(({ icon, path, label }, index) => (
          <NavLink key={index} to={path} className="mouse">{icon} {label}</NavLink>
        ))}
      </nav>
      <div className="search-bar">
        <input className="Search-style" type="text" placeholder="Search..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }} />
        <CiSearch className="search-icon" onClick={handleSearch} />
      </div>
      <div className="icons">
        <IoIosHeartEmpty className="hidden-icons"/>
        <IoShuffle className="hidden-icons"/>
        {isDark ? (
          <IoSunnyOutline onClick={toggleTheme} />)
          :
          (
            <IoMoonOutline onClick={toggleTheme} />)
        }

      </div>
    </header>
  );
};
export default Header;
