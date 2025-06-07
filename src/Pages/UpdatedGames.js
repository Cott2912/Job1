
import News from "../Components/News";
import '../Style/UpdatedGames.css';

const UpdateGames = () => {
    return (
        <>
            <div className="Update-container">
                <h1 className="title-update">
                    Recently Updated - 1games.io
                    <p className="text-update">
                        In this section, you will not only find the hottest titles but also enjoy new updates with improved gameplay mechanics, novel characters, additional features,...
                    </p>
                </h1>
                <News />
                <p className="text-update-infor">
                    In this section, you will not only find the hottest titles but also enjoy new updates with improved gameplay mechanics, novel characters, additional features,
                    exclusive events, etc. Imagine your favorite game has just gotten a new game mode or a speed race with a global leaderboard—all waiting for you to discover!
                    Follow the updated section on the 1Games platform to not miss any newest upgrades and enjoy the ultimate gaming experience!
                </p>
            </div>
        </>

    );
}
export default UpdateGames;