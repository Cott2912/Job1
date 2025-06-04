import "../Style/Add.css";
import { games } from "./News";
import { getRandomGames } from './1Line';

const Add = () => {
  const randomGames = getRandomGames(games, 8);
  return (
    <div className="Add-container">
      {randomGames.map(game => (
        <div key={game.id} className="Add-child-container">
          <img
            src={game.imageUrl}
            alt={game.name}
            className="game-image-Add"
          />
          <h3 className="game-title-Add">{game.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Add;
