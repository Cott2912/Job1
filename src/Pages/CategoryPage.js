import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import About1Games from "../Components/About1Game";
import News from "../Components/News";

const CategoryPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <SideBar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <News />
      <About1Games />
    </>
  );
};
export default CategoryPage;
