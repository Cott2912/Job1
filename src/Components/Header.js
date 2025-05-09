// import React, { useState, useEffect } from "react";
// import "./Header.css";
// import { GrUpdate } from "react-icons/gr";
// import { IoIosTrendingUp } from "react-icons/io";
// import { FaRegStar } from "react-icons/fa";
// import { RiMenu4Line } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoShuffle, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

// const Header = ({ toggleSidebar }) => {
//     const [isDark, setIsDark] = useState(true);
//     useEffect(() => {
//         document.body.classList.toggle("dark-theme", isDark);
//         document.body.classList.toggle("light-theme", !isDark);
//     }, [isDark]);

//     return (
//         <header className="header">
//             <div className="menu-icon" onDoubleClick={toggleSidebar}>
//                 <RiMenu4Line />
//             </div>

//             <div className="logo">1GAMES.IO</div>

//             <nav className="nav-links">
//                 <GrUpdate />
//                 <span className="mouse">Updated</span>
//                 <IoIosTrendingUp />
//                 <span className="mouse">Trending</span>
//                 <FaRegStar />
//                 <span className="mouse">New Games</span>
//             </nav>

//             <div className="search-bar">
//                 <input type="text" placeholder="Search..." />
//                 <CiSearch />
//             </div>

//             <div className="icons">
//                 <IoIosHeartEmpty />
//                 <IoShuffle />
//                 {isDark ? (
//                     <IoSunnyOutline onDoubleClick={() => setIsDark(false)} />
//                 ) : (
//                     <IoMoonOutline onDoubleClick={() => setIsDark(true)} />
//                 )}
//                 <IoIosHeartEmpty />
//             </div>
//         </header>
//     );
// };

// export default Header;
import React from "react";
import "./Header.css";
import { GrUpdate } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShuffle, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Header = ({ toggleSidebar }) => {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
  }, [isDark]);

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
          <IoSunnyOutline onClick={() => setIsDark(false)} />
        ) : (
          <IoMoonOutline onClick={() => setIsDark(true)} />
        )}
        <IoIosHeartEmpty />
      </div>
    </header>
  );
};

export default Header;
