import React from "react";
import '../Style/PlusButton.css';
import { TiPlusOutline } from "react-icons/ti";
const PlusButton = ({ onClick }) => {
    return (
        <div className="plbutton-container" onClick={onClick}>
            <div className="ripple"></div>
            <div className="pl-icon"><TiPlusOutline /></div>
        </div>
    );
}
export default PlusButton;