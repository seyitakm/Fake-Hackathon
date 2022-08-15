import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import GamesCard from "./GamesCard";

const GamesList = () => {
  const { products, getGames } = useProducts();
  console.log(products);

  useEffect(() => {
    getGames();
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "80vw",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          products.map((item) => <GamesCard item={item} key={item.id} />)
        ) : (
          <h2>Loading</h2>
        )}
      </Box>
    </Box>
  );
};

export default GamesList;
