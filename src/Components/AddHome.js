import { Link } from "react-router-dom";
import '../Style/AddHome.css'
import { useContext } from "react";
import {ThemeContext} from './Themecontext';

const AddHome = ({ title, children }) => {
  const { isDark } = useContext(ThemeContext); 
  return (
    <div className="static-page-container">
      <div className="breadcrumb">
        <Link to="/" className={`breadcrumb-home ${isDark ? "dark-mode" : "light-mode"}`}>Home</Link>
        <span className={`breadcrumb-separator ${isDark ? "dark-mode" : "light-mode"}`}>/</span>
        <span className={`breadcrumb-title ${isDark ? "dark-mode" : "light-mode"}`}>{title}</span>
      </div>
      <h1 className={`page-title ${isDark ? "dark-mode" : "light-mode"}`}>{title}</h1>
      <div className={`page-content content-box ${isDark ? "dark-mode" : "light-mode"}`}>
        {children}
      </div>
    </div>
  );
};
export default AddHome;
