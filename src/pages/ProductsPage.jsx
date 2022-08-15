import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import GamesList from "../components/products/GamesList";

const ProductsPage = () => {
  return (
    <Box>
      <GamesList />
      <Footer />
    </Box>
  );
};

export default ProductsPage;
