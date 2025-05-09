// // import logo from './logo.svg';
// // import './App.css';
// // import HomePage from './Pages/HomePage';
// // import Header from './Components/Header';
// // import CategoryPage from './Pages/CategoryPage';
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Footer from './Components/Footer';
// // import GameDetailPage from './Pages/GameDetailPage';


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //     <Router>
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/category/:category" element={<CategoryPage />} />
// //         <Route path="/game/:gameId" element={<GameDetailPage />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //      </header>
// //     </div>
// //   );
  
// // }

// // export default App;
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import CategoryPage from "./Pages/CategoryPage";
// import GameDetailPage from "./Pages/GameDetailPage";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/category/:category" element={<CategoryPage />} />
//           <Route path="/game/:gameId" element={<GameDetailPage />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
// import HomePage from './Pages/HomePage';
// import CategoryPage from './Pages/CategoryPage';
// import GameDetailPage from './Pages/GameDetailPage';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Sidebar from './Components/SideBar';

// function App() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="App">
//       <Router>
//         <Header toggleSidebar={toggleSidebar} />
//         <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/category/:category" element={<CategoryPage />} />
//           <Route path="/game/:gameId" element={<GameDetailPage />} />
//         </Routes>

//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import GameDetailPage from './Pages/GameDetailPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs';


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
return (
    <div className="App">
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/game/:gameId" element={<GameDetailPage />} />
           <Route path="/contact-us" element={<ContactUs />} /> 
           <Route path="/about-us" element={<AboutUs />} /> 
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

