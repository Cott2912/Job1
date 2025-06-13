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
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 930);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
    setHighlightedIndex(-1);
    setIsMobileSearchOpen(false);
  };

  const performSearch = (term) => {
    const foundGame = games.find(
      (game) => game.name.toLowerCase() === term.toLowerCase()
    );
    if (foundGame) {
      navigate(`/game/${foundGame.id}`);
    } else {
      navigate(`/no-result?query=${encodeURIComponent(term)}`);
    }
    resetSearch();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 10));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        navigate(`/game/${suggestions[highlightedIndex].id}`);
      } else {
        performSearch(searchTerm);
      }
      resetSearch();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/game/${id}`);
    resetSearch();
  };

  const handleSearchIconClick = () => {
    if (isMobile) {
      setIsMobileSearchOpen((prev) => !prev);
    } else {
      performSearch(searchTerm);
    }
  };

  return (
    <>
      {isMobileSearchOpen && isMobile && (
        <div
          className="search-overlay"
          onClick={() => setIsMobileSearchOpen(false)}
        ></div>
      )}
      <header className="header">
        <div
          className={`menu-icon ${isMobileSearchOpen ? "hidden-on-search" : ""}`}
          onClick={toggleSidebar}
        >
          <RiMenu4Line />
        </div>

        <NavLink
          to="/1Game.io"
          className={`logo ${isMobileSearchOpen ? "hidden-on-search" : ""}`}
        >
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

        <div className="search-bar relative w-full max-w-[300px]">
          {(isMobileSearchOpen || !isMobile) && (
            <>
              <input
                className="Search-style"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              {suggestions.length > 0 && (
                <ul className="search-suggestions">
                  {suggestions.map((game, index) => (
                    <li
                      key={game.id}
                      className={index === highlightedIndex ? "highlighted" : ""}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onMouseLeave={() => setHighlightedIndex(-1)}
                      onClick={() => handleSuggestionClick(game.id)}
                    >
                      {game.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
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
