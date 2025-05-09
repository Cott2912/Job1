import React, { useState } from "react";
import "./HomePage.css";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import News from "../Components/News";
import About1Games from "../Components/About1Game";
import Reading from "../Components/Reading";
import Footer from "../Components/Footer";

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
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

           
            <div className="section">
                <h1 className="highlight">Featured Games</h1>
                <News />
                 <h1 className="highlight">New Games</h1>
                <News />
                 <h1 className="highlight">Recents Play</h1>
                <News />
                 <h1 className="highlight">Trending Now</h1>
                <News />
                 <h1 className="highlight">Hot Games</h1>
                <News />
                 <h1 className="highlight">1Games Series</h1>
                <News />
            </div>

            <div><About1Games /></div>
            <Reading />
          
        </>
    );
};

export default HomePage;
