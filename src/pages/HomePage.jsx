import React from "react";
import Footer from "../components/Footer";
import GamesList from "../components/products/GamesList";
import home from "../assets/img/home.mp4";
import hb from "../assets/img/hb.jpg";
import MainText from "../components/MainText";
import SecondText from "../components/SecondText";

const HomePage = () => {
  return (
    <div>
      {/* <MainText /> */}
      <div className="video__container">
        <video className="video" src={home} autoPlay loop muted></video>
      </div>
      <SecondText />
      <div className="home__page">
        <div className="first__block">
          <img className="home__img" src="" alt="" />
        </div>
        <div className="second__block">
          <div className="sec__one"></div>
          <div className="sec__two"></div>
        </div>

        <div className="third__block">
          <div className="th__one"></div>
          <div className="th__two"></div>
        </div>

        <div className="fourth__block"></div>
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
