import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import GamesList from "../components/products/GamesList";
import SearchBar from "../components/SearchBar";

const ProductsPage = () => {
  return (
    <Box>
      <div className="nightText">
        <div className="search-text">Night City</div>
      </div>
      <SearchBar />
      <GamesList />
      <Footer />
    </Box>
  );
};

export default ProductsPage;
