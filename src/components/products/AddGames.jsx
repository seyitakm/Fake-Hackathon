import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddGames = () => {
  const { addGames } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  console.log(product);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Add new game card
      </Typography>
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Picture"
        variant="outlined"
        fullWidth
        name="picture"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Type"
        variant="outlined"
        fullWidth
        name="type"
        onChange={handleInp}
      />
      <Button
        sx={{
          m: 1,
          bgcolor: "#8C2CEF",
          color: "#fff",
          "&:hover": { bgcolor: "#8125DC" },
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          addGames(product);
          navigate("/products");
        }}
      >
        ADD GAME
      </Button>
    </Box>
  );
};

export default AddGames;
