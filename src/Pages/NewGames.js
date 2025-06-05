import React from "react";
import About1Game from '../Components/About1Game';
import News from "../Components/News";
import PlusButton from "../Components/PlusButton";
import AddPage from "../Components/AddPage";
import OneLine from "../Components/1Line";

const sections = [
    {
        title: "WHAT WILL YOU FIND IN NEW GAMES?",
        text: "The New Games section is your go-to spot for the freshest and most exciting games added to our site! You will receive a collection of the brand-new challenges that have captured the hearts of many players recently. Or, we even give you games that were famous in the past with retro gameplay, childhood feeling, and addictive classic experiences."
    },
    {
        title: "TRENDS OF GAMES IN THIS SECTION",
        text: "Stay updated with the hottest new games across all genres! From high-speed action to brain-teasing puzzles, this section is constantly refreshed with new challenges, mechanics, and stories.",
        additionalText: "There’s no limit to game genres in this section. You have an opportunity to access exciting games with a variety of gameplay. Regular scheduling ensures that these promising playgrounds consistently provide you with new experiences."
    },
    {
        title: "WHY YOU SHOULD PLAY THESE GAMES",
        text: "Playing new games means experiencing fresh challenges, innovative mechanics, and exciting gameplay before anyone else! Whether you’re looking to test your skills, explore new worlds, or stay ahead of gaming trends, this section keeps your adventures fun, dynamic, and ever-evolving."
    }
];

const NewGames = () => {
    return (
        <>
            <About1Game />
            <PlusButton />
            <News title="New Games" />
            <OneLine />
            <AddPage />

            <div style={{
                display: "flex", flexDirection: "column", padding: "20px", textAlign: "left"
            }}>
                {sections.map((section, index) => (
                    <React.Fragment key={index}>
                        <h2 style={{ color: "orange", fontSize: "22px", marginBottom: "8px" }}>{section.title}</h2>
                        <p style={{ maxWidth: "100%", lineHeight: "1.6", marginTop: "5px" }}>{section.text}</p>
                        {section.additionalText && <p style={{ maxWidth: "100%", lineHeight: "1.6", marginTop: "5px" }}>{section.additionalText}</p>}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default NewGames;
