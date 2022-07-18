import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* left heading */}
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>
        {/* figure */}
        <div className="figure">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-btn">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      {/* right heading */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="heart-img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_img} alt="" className="hero-img" />
        <img src={hero_img_back} alt="hero-img_blk" className="hero-img_blk" />

        {/* calories */}
        <div className="calories">
          <img src={calories} />
          <div className="calories-txt">
            <span>Calories burned</span>
            <span>200 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
