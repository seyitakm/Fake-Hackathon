import React from "react";
import Footer from "../components/Footer";
import Card from "../components/paymentform/Card";
import GamesList from "../components/products/GamesList";
import ProductsPage from "./ProductsPage";

const HomePage = () => {
  return (
    <div>
      <div className="homePage">
        <GamesList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
