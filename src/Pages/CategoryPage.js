import { useState } from "react";
import SideBar from "../Components/SideBar";
import About1Games from "../Components/About1Game";
import News from "../Components/News";

const CategoryPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <SideBar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <div style={{ marginTop: "70px" }}>
        <News />
      </div>
      <About1Games />
    </>
  );
};
export default CategoryPage;
