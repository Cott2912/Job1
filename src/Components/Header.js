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

const Header = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <RiMenu4Line />
      </div>
      <div className="logo">1GAMES.IO</div>
      <nav className="nav-links">
        <GrUpdate />
        <span className="mouse">Updated</span>
        <IoIosTrendingUp />
        <span className="mouse">Trending</span>
        <FaRegStar />
        <span className="mouse">New Games</span>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <CiSearch />
      </div>
      <div className="icons">
        <IoIosHeartEmpty />
        <IoShuffle />
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
