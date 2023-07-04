import React from "react";
import {Link} from "react-router-dom";
import BannerImage from '../assets/banner.jpg';
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Pixel NFTArt</h1>
                <h3>The future of art auctions</h3>
                <Link to="/explore">
                    <button>Explore</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;