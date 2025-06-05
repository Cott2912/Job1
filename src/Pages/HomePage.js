import React, { useState } from "react";
import Sidebar from "../Components/SideBar";
import News from "../Components/News";
import About1Games from "../Components/About1Game";
import Reading from "../Components/Reading";
import PlusButton from "../Components/PlusButton";
import OneLine from "../Components/1Line";
import RecentPlay from "../Components/RecentPlay";

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
                <PlusButton to="/features.games" />
                <News title="Featured Games" />
                <PlusButton to="news.game" />
                <OneLine title="New Game" />
                <RecentPlay title="Recent Play" />
                <PlusButton to="trending-now" />
                <News title="Trending Now" />
                <PlusButton to="hot-games" />
                <News title="Hot Games" />
                <PlusButton to="1games-series" />
                <News title="1Games Series" />
            </div>
            <div><About1Games /></div>
            <Reading />
        </>
    );
};

export default HomePage;

