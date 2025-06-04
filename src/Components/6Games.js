
import '../Style/6Games.css';
import { games } from "./News";
import { getRandomGames } from './1Line';

const SixGames = () => {
    const randomGames = getRandomGames(games, 6);
    return (
        <div className="nine-game">
            <div className="styles-six-game-item">
                {randomGames.map((game) => (
                    <div key={game.id} className="six-game-item">
                        <img src={game.imageUrl} alt={game.name} className="six-game-image" />
                        <p>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SixGames;