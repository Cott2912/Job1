import { games } from "./News";
import { getRandomGames } from "./1Line";
import '../Style/1Game.css';
const OneGame = () => {
    const [game] = getRandomGames(games, 1);
    return (
        <div className="one-game-card">
            <img src={game.imageUrl} alt={game.name} className="one-game-image" />
            <h2 className="one-game-title">{game.name}</h2>
        </div>
    );
}
export default OneGame;