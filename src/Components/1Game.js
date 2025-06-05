import { games } from "./News";
import { getRandomGames } from "./1Line";
import '../Style/1Game.css';
import { useNavigate } from "react-router-dom";
const OneGame = () => {
    const [game] = getRandomGames(games, 1);
    const navigate = useNavigate();
    return (
        <div
            className="one-game-card"
            onClick={() => navigate(`/game/${game.id}`)}
            style={{ cursor: "pointer" }}
        >
            <img src={game.imageUrl} alt={game.name} className="one-game-image" />
            <h2 className="one-game-title">{game.name}</h2>
        </div>

    );
}
export default OneGame;