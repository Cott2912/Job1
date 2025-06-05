import React from "react";
import { useLocation } from "react-router-dom";
import News from "../Components/News";
import PlusButton from "../Components/PlusButton";
import OneLine from "../Components/1Line";

const NoResultForSearch = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query") || "your search";

    return (
        <>
            <div style={{ fontSize: "26px", padding: "10px", textAlign: "left", marginBottom: "10px", marginTop: "10px" }}>Hmm, no result for "{searchQuery}"</div>
            <PlusButton />
            <News title="More Games" />
            <OneLine />

        </>
    );
};

export default NoResultForSearch;
