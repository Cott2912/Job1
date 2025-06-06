import React from "react";
import News from "../Components/News";
import PlusButton from "../Components/PlusButton";
import AddPage from "../Components/AddPage";
import { GoDotFill } from "react-icons/go";
const gameCategories = [
    { name: "Action Games", path: "/action-games" },
    { name: "Hot Hit Games", path: "/adventure-games" },
    { name: "Puzzle Games", path: "/puzzle-games" },
    { name: "Racing Games", path: "/racing-games" },
    { name: "Sport Game", path: "sport-games" }
];
const TrendingGames = () => {
    return (
        <>
            {gameCategories.map((category, index) => (
                <React.Fragment key={index}>
                    <PlusButton to={category.path} title={category.name} />
                    <News title={category.name} />
                </React.Fragment>
            ))}
            <AddPage />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", padding: "20px" }}>
                {[
                    {
                        title: "HOT GAMES: THE SECTION FOR A TRENDSETTER!", text:
                            "The Hot Games section is where the most popular, trending, and must-play games come together! These are the titles that players can’t get enough of—whether it’s thrilling action, tricky puzzles, or fast-paced challenges, you always find the best picks right here."
                    },
                    {
                        title: "EXPERIENCES YOU CAN TRY IN HOT GAMES", text:
                            "To make it into the Hot Games section, a playground needs to stand out! Here’s what makes a game 'hot':",
                        list: ["High Play Count: The more players enjoy it, the hotter it gets!",
                            "Positive Ratings: Only top-rated games with great feedback make the list.",
                            "Trending Gameplay: Games that follow or set new gaming trends.",
                            "Engagement Level: Addictive mechanics that keep players coming back for more.",
                            "Fresh and Exciting: Unique concepts, fun challenges, and immersive experiences."]
                    },
                    { title: "Find the Hot Games Section in 1Games.IO" },
                    {
                        text:
                            "These criteria are not only based on our gaming hub’s factor; they are truly a captivating phenomenon in the community all over the world. So, the game in this section often has simple game rules yet addictive gameplay. Besides, these playgrounds are also suitable for numerous types of players. You are sure to find your preferred category here!"
                    },].map((section, index) => (
                        <React.Fragment key={index}>
                            {section.title && <h1 style={{ color: "orange", marginBottom: "10px", fontSize: "25px" }}>{section.title}</h1>}
                            <p style={{ maxWidth: "100%", lineHeight: "1.6", marginTop: "2px" }}>
                                {section.text}
                                {section.list && section.list.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <br /> <GoDotFill /> {item}
                                    </React.Fragment>
                                ))}
                            </p>
                        </React.Fragment>
                    ))}
            </div>
        </>

    );
}
export default TrendingGames;