import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import GameDetailPage from './Pages/GameDetailPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import DMCA from './Pages/DMCA';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsandConditions from './Pages/TermsandConditions';
import { ThemeProvider } from './Components/Themecontext';
import UpdateGames from './Pages/UpdatedGames';
import TrendingGames from './Pages/Trending';
import NewGames from './Pages/NewGames';
import NoResultForSearch from './Pages/NoResult';
import ContentViewmore from './Pages/ContentViewMore';
import RecentPlayInfor from './Pages/RecentPlayInfor';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <ThemeProvider>
      <div className="App">
        <div className='background'></div>
        <Router>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:gameId" element={<GameDetailPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/DMCA" element={<DMCA />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsandConditions />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/updated" element={<UpdateGames />} />
            <Route path="/trending" element={<TrendingGames />} />
            <Route path="/newgame" element={<NewGames />} />
            <Route path="/no-result" element={<NoResultForSearch />} />
            <Route path="/1Game.io" element={<HomePage />} />
            <Route path="/1game.io/new-games" element={<ContentViewmore />} />
            <Route path="/category/recently-played" element={<RecentPlayInfor />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}
export default App;
