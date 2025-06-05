import { NavLink } from 'react-router-dom';
import '../Style/PlusButton.css';
import { TiPlusOutline } from "react-icons/ti";
import { useState } from 'react';

const PlusButton = ({ to, title }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <div
            className="plbutton-wrapper"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <NavLink to={to} className="plbutton-container">
                <div className="ripple"></div>
                <div className="pl-icon"><TiPlusOutline /></div>
            </NavLink>
            {showTooltip}
        </div>
    );
};
export default PlusButton;
