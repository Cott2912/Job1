import "../Style/Add.css";
const list = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Game ${i + 1}`,
  url: `https://1games.io/game${i + 1}`,
}));

const Add = () => {
  return (
    <div className="hihi">
      {list.map(game => (
        <div key={game.id} className="haha">
          <iframe
            src={game.url}
            title={game.name}
            allowFullScreen
            className="game-iframe">
          </iframe>
          <h3 className="game-title">{game.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Add;
