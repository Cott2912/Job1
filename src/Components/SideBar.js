import React, { useEffect } from "react";
import "../Style/Sidebar.css";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { TbChartBarPopular } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { SiAmazongames } from "react-icons/si";
import { RiSwordFill } from "react-icons/ri";
import { GiSpiderEye } from "react-icons/gi";
import { PiMouseDuotone } from "react-icons/pi";
import { CiBasketball } from "react-icons/ci";
import { AiFillFire } from "react-icons/ai";
import { CiIceCream } from "react-icons/ci";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GiGiantSquid } from "react-icons/gi";
const categories = [
  { name: "Home", icon: <IoHomeOutline />, path: "/" },
  { name: "Category Page", icon: <FaGamepad />, path: "/category/:category" },
  { name: "Updated", icon: <MdOutlineBrowserUpdated />, path: "/updated" },
  { name: "Recently Played", icon: <IoGameControllerOutline />, path: "/category/recently-played" },
  { name: "Trending", icon: <HiTrendingUp />, path: "/trending" },
  { name: "New Games", icon: <TbChartBarPopular />, path: "/newgame" },
  { name: "Tags", icon: <BsTags />, path: "/category/:category" },
  { name: "1Games Series", icon: <SiAmazongames />, path: "/category/:category" },
  { name: "Action Games", icon: <RiSwordFill />, path: "/category/:category" },
  { name: "Arcade Games", icon: <GiSpiderEye />, path: "/category/:category" },
  { name: "Clicker Games", icon: <PiMouseDuotone />, path: "/category/:category" },
  { name: "Sports Games", icon: <CiBasketball />, path: "/category/:category" },
  { name: "Survival Games", icon: <AiFillFire />, path: "/category/:category" },
  { name: "Cool Math", icon: <CiIceCream />, path: "/category/:category" },
  { name: "Crazy Games", icon: <TbMoodCrazyHappy />, path: "/category/:category" },
  { name: "Squid Games", icon: <GiGiantSquid />, path: "/category/:category" },
];
const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
      closeSidebar();
    }
  };
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="back-btn" onClick={closeSidebar}>
          <IoChevronBackCircle size={30} />
        </button>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleNavigate(category.path)}
              style={{ cursor: "pointer" }} >
              <span>{category.icon}</span> {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;