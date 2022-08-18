import { Box, Pagination, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import GamesCard from "./GamesCard";

const GamesList = () => {
  const { products, getGames } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getGames();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          currentData().map((item) => <GamesCard item={item} key={item.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </Box>

      <Pagination
        variant="outlined"
        shape="rounded"
        sx={{ m: "0 auto", bgcolor: "white" }}
        color="primary"
        count={count}
        page={page}
        onChange={handlePage}
      />
    </Box>
  );
};

export default GamesList;
