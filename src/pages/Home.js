import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner1.jpg"

function Home() {
    return (
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>NZD Burger</h1>
                <p>Delicious Hamburgers <br/> with NZD Spicy Mixed</p>
                <Link to="/menu"><button>Order Now</button></Link>
            </div>
        </div>
    )
}

export default Home