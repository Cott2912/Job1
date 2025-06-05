import React from "react";
import "../Style/RecentPlayInfo.css";
import { Link } from "react-router-dom";

const RecentPlayInfor = () => {
    return (
        <div className="recents-container">
            <h1 className="recents-title">Recents</h1>
            <p className="recents-subtitle">
                Find challenges that have caught your eye afresh with the Recents section! All games on 1Games.IO have unlimited replays, so do whatever you want!
            </p>

            <div className="recents-box">
                <h2 className="section-heading">WHAT IS “THE RECENTS SECTION”?</h2>
                <p>
                    The Recents section is your personal gaming history, making it easy to jump back into your most recently played games.
                    No more searching—your favorite adventures are just a click away, ready for you to pick up right where you left off!
                </p>
                <p>
                    The playgrounds on this list are based entirely on your own up-to-the-minute experiences. If you're looking to catch up on some unfinished rounds, this section is the destination to go!
                </p>

                <h3 className="section-subheading">Where You Can Find Recents on 1Games.IO</h3>
                <ul>
                    <li>Enter from the homepage: Scroll down to the <Link to="/featured">Featured</Link> and <Link to="/newgame">New Games</Link> sections to see a list of recently played games.</li>
                    <li>Access from the core menu: Click on the three-dash icon in the upper left corner of the website. Then, simply select <Link to="/category/recently-played">“Recents”</Link>.</li>
                </ul>

                <h2 className="section-heading">WHY THIS SECTION IS NECESSARY</h2>
                <ul>
                    <li><strong>Instant Access</strong> - Quickly find and resume your favorite games.</li>
                    <li><strong>No More Searching</strong> - Your recent plays are saved for convenience.</li>
                    <li><strong>Stay on Track</strong> - Keep progressing in ongoing challenges.</li>
                    <li><strong>Variety at Your Fingertips</strong> - Revisit different genres effortlessly.</li>
                </ul>

                <p className="closing-text">
                    Why start over when you can continue where you left off? The Recents unit ensures your gaming journey never stops. Click, play, and keep the fun going—your next <Link to="/adventure">adventure</Link> is waiting!
                </p>
            </div>
        </div>
    );
};

export default RecentPlayInfor;
