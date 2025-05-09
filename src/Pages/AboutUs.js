import React from "react";
import './AboutUs.css';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="about-us">
            <nav className="child-aboutus">
                <Link to="/" className="active-1">Home</Link> / <span className="active">About Us</span>
            </nav>
            <h1 className="about-title">About Us</h1>
            <div className="content">
                <p>
                    1Games features the best range of free games online and provides the most enjoyable experience for playing games with no interruptions. Our goal is to develop the most comprehensive online playground. Free and accessible to all players...
                </p>
                <p> 
                    This website is suitable for families. Our objective in selecting and developing these games was to provide a positive, age-appropriate experience.
                </p>
                <p>
                    In-game payments have become commonplace in free games. This matter is easily recognized through actions such as withholding material or aggravating you in an effort to induce you to purchase power-ups in those games...
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
