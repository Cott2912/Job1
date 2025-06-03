import React, { useState } from "react";
import Sidebar from "../Components/SideBar";
import News from "../Components/News";
import About1Games from "../Components/About1Game";
import Reading from "../Components/Reading";
import PlusButton from "../Components/PlusButton";


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
                <PlusButton />
                <News title="Featured Games" />
                <PlusButton />
                <News title="New Games" />
                <PlusButton />
                <News title="Recents Play" />
                <PlusButton />
                <News title="Trending Now" />
                <PlusButton />
                <News title="Hot Games" />
                <PlusButton />
                <News title="1Games Series" />
            </div>
            <div><About1Games /></div>
            <Reading />
        </>
    );
};

export default HomePage;
