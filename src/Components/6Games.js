import { useNavigate } from "react-router-dom";
import '../Style/6Games.css';
import { games } from "./News";
import { getRandomGames } from './1Line';

const SixGames = () => {
    const randomGames = getRandomGames(games, 6);
    const navigate = useNavigate();
    return (
        <div className="nine-game">
            <div className="styles-six-game-item">
                {randomGames.map((game) => (
                    <div key={game.id} className="six-game-item" onClick={() => navigate(`/game/${game.id}`)} style={{ cursor: "pointer" }}>
                        <img src={game.imageUrl} alt={game.name} className="six-game-image" />
                        <p>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SixGames;