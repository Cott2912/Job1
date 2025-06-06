import '../Style/1Line.css';
import { games } from "./News";
import SixGames from "./6Games";
import OneGame from './1Game';
import ViewMore from './ViewMore';
import { useNavigate } from "react-router-dom";
export const getRandomGames = (gameList, count) => {
    return gameList.sort(() => Math.random() - 0.5).slice(0, count);
}
const OneLine = ({ title }) => {
    const randomGames = getRandomGames(games, 9);
    const navigate = useNavigate();
    return (
        <>
            <div className="oneline-game">
                <h1 className="style-title-oneline">{title}</h1>
                <div className="style-game-item">
                    {randomGames.map((game) => (
                        <div
                            key={game.id}
                            className="game-item"
                            onClick={() => navigate(`/game/${game.id}`)}
                        >
                            <img src={game.imageUrl} alt={game.name} className="game-image" />
                            <p>{game.name}</p>
                        </div>
                    ))}
                </div>

                <OneGame />
                <SixGames />

            </div>
            <ViewMore />
        </>
    );
}
export default OneLine;