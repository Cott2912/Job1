import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import News from "../Components/News";
import About1Games from "../Components/About1Game";
import Reading from "../Components/Reading";


const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };
    return (
        <>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <div>
                <News title="Featured Games" />
                <News title="New Games" />
                <News title="Recents Play" />
                <News title="Trending Now" />
                <News title="Hot Games" />
                <News title="1Games Series" />
            </div>
            <div><About1Games /></div>
            <Reading />
        </>
    );
};

export default HomePage;
