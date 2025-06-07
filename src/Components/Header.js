import React, { useContext, useState, useEffect } from "react";
import "../Style/Header.css";
import { GrUpdate } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShuffle, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "./Themecontext";
import { NavLink, useNavigate } from "react-router-dom";
import { games } from "./News";

const Header = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 930);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    const foundGame = games.find(
      (game) => game.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundGame) {
      navigate(`/game/${foundGame.id}`);
    } else {
      navigate(`/no-result?query=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm("");
    setIsMobileSearchOpen(false);
  };
  const handleSearchIconClick = () => {
    if (isMobile) {
      setIsMobileSearchOpen((prev) => !prev);
    } else {
      handleSearch();
    }
  };
  return (
    <>
      {isMobileSearchOpen && isMobile && (
        <div className="search-overlay" onClick={() => setIsMobileSearchOpen(false)}></div>
      )}
      <header className="header">
        <div className={`menu-icon ${isMobileSearchOpen ? "hidden-on-search" : ""}`} onClick={toggleSidebar}>
          <RiMenu4Line />
        </div>
        <NavLink to="/1Game.io" className={`logo ${isMobileSearchOpen ? "hidden-on-search" : ""}`}>
          1GAMES.IO
        </NavLink>
        <nav className={`nav-links ${isMobileSearchOpen ? "hidden-on-search" : ""}`}>
          {[
            { icon: <GrUpdate />, path: "/updated", label: "Updated" },
            { icon: <IoIosTrendingUp />, path: "/trending", label: "Trending" },
            { icon: <FaRegStar />, path: "/newgame", label: "New Games" },
          ].map(({ icon, path, label }, index) => (
            <NavLink key={index} to={path} className="mouse">
              {icon} {label}
            </NavLink>
          ))}
        </nav>
        <div className="search-bar">
          {(isMobileSearchOpen || !isMobile) && (
            <input
              className="Search-style"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              autoFocus
            />
          )}
          <CiSearch className="search-icon" onClick={handleSearchIconClick} />
        </div>

        <div className={`icons ${isMobileSearchOpen ? "hidden-on-search" : ""}`}>
          <IoIosHeartEmpty className="hidden-icons" />
          <IoShuffle className="hidden-icons" />
          {isDark ? (
            <IoSunnyOutline onClick={toggleTheme} />
          ) : (
            <IoMoonOutline onClick={toggleTheme} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;


