import React from "react";
import Footer from "../components/Footer";
import GamesList from "../components/products/GamesList";
import home from "../assets/img/home.mp4";
import PricingCards from "../components/PricingCards";

const HomePage = (item) => {
  return (
    <div>
      <div className="video__container">
        <video className="video" src={home} autoPlay loop muted></video>
      </div>
      <div className="home__page">
        <div className="first__block">
          <img className="home__img" src="" alt="" />
        </div>
        <div className="second__block">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="homePageMain">
        <div className="homePage">
          <GamesList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
