import React from "react";
import logo2 from "../assets/gays/logo2.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__inner">

        <div className="card">
          <img className="card--img" src={logo2} alt="" />
          <h3>GAME Name</h3>
          <div className="card--descr">
            Price
          </div>
          <div className="buttons">
            <button>More</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
