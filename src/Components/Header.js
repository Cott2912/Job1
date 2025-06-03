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

const Header = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <RiMenu4Line />
      </div>
      <NavLink to="/1Game.io" className="logo">1GAMES.IO</NavLink>
      <nav className="nav-links">
        <GrUpdate />
        <NavLink to="/updated" className="mouse">Updated</NavLink>
        <IoIosTrendingUp />
        <NavLink to="/trending" className="mouse">Trending</NavLink>
        <FaRegStar />
        <NavLink to="/newgame" className="mouse">New Games</NavLink>
      </nav>
      <div className="search-bar">
        <input className="Search-style" type="text" placeholder="Search..." />
        <CiSearch />
      </div>
      <div className="icons">
        {isDark ? (
          <IoSunnyOutline onClick={toggleTheme} />)
          :
          (
            <IoMoonOutline onClick={toggleTheme} />)
        }
        <IoIosHeartEmpty />
        <IoShuffle />
      </div>
    </header>
  );
};
export default Header;
