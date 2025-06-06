import AddHome from "../Components/AddHome";
const aboutContent = [
    "1Games features the best range of free games online and provides the most enjoyable experience for playing games with no interruptions. Our goal is to develop the most comprehensive online playground. Free and accessible to all players. We feature the best range of free online games and provide the most enjoyable experience for playing games by yourself or with others. All of our games are available for instant play with no downloads, logins, pop-ups, or other interruptions. Our games are accessible on desktop, tablet, and mobile devices, allowing you to play them at home or while traveling.",
    "This website is family-friendly, carefully selecting and developing games to provide a positive, age-appropriate experience.",
    "In-game payments have become commonplace in free games. This matter is easily recognized through actions such as withholding material or aggravating you in an effort to induce you to purchase power-ups in those games. It appears that the catch for playing free games is that they will use every trick to get you to pay—frequently many times more than you would pay for the game outright. This method is effective, and some individuals unknowingly spend enormous amounts of money on their favorite games over time. There are no in-game purchases whatsoever in any of our games. All of our games and their materials are completely free, with no exceptions!"
];

const AboutUs = () => {
    return (
        <AddHome title="About Us">
            <div style={{ marginBottom: "30px" }}>
                {aboutContent.map((text, index) => (
                    <p key={index} style={{ lineHeight: "1.6", marginBottom: "10px" }}>{text}</p>
                ))}
            </div>
        </AddHome>
    );
};

export default AboutUs;
