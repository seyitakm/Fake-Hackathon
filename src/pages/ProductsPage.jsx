import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import MainText from "../components/MainText";
import GamesList from "../components/products/GamesList";
import SearchBar from "../components/SearchBar";

const ProductsPage = () => {
  return (
    <Box>
      <MainText />
      <SearchBar />
      <div className="homePageMain">
        <div className="homePage">
          <GamesList />
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default ProductsPage;
