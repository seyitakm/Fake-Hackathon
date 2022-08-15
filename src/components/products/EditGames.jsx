import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditGames = () => {
  const { productDetails, getGamesDetails, saveEditedGames } = useProducts();

  const [product, setProduct] = useState(productDetails);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getGamesDetails(id);
  }, []);

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
        value={product.name || ""}
        focused
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
        value={product.description || ""}
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
        value={product.price || ""}
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
        value={product.picture || ""}
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
        value={product.type || ""}
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
          saveEditedGames(product);
          navigate("/products");
        }}
      >
        Save Game Card!
      </Button>
    </Box>
  );
};

export default EditGames;
