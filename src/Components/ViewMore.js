import React from "react";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import '../Style/ViewMore.css';
const ViewMore = () => {
    return (
        <NavLink className="style-ViewMore" to="/1game.io/new-games"> VIEW MORE <GrNext /></NavLink>
    );
}
export default ViewMore;