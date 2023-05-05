import React from "react";
import BannerImage from "../assets/ham12.jpeg";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to NZD Burger. We would like to give you an overview of
          Restaurant. Our goal is to give you an honest look at Restaurant and
          provide you with the information you need to make a decision about
          whether this app is right for you. NZD Burger was founded in 2023 by
          Emre DİKİCİ and has become the leading review website for Restaurant.
          Provide complete, accurate, and up-to-date information about this
          product. We hope you enjoy Restaurant as much as we promote it. If you
          have any questions or comments, please do not hesitate to contact us.
          Sincerely, Chef Emre DİKİCİ...
        </p>
      </div>
    </div>
  );
}

export default About;
