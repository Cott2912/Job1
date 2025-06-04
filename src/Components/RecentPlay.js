import '../Style/RecentPlay.css';
import { games } from "./News";
import { getRandomGames } from './1Line';
const RecentPlay = ({ title }) => {
    const randomGames = getRandomGames(games, 7);
    return (
        <div className="recent-game">
            <h1 className="style-recent-title">{title}</h1>
            <div className="styles-recent-item">
                {randomGames.map((game) => (
                    <div key={game.id} className="recent-item">
                        <img src={game.imageUrl} alt={game.name} className="recent-image" />
                        <p>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default RecentPlay;