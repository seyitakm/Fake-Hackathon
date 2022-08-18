import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const SearchBar = () => {
  const navigate = useNavigate();
  const { getGames, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getGames();
  }, [searchParams]);

  useEffect(() => {
    getGames();
  }, []);

  console.log(window.location.search);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 3,
          maxHeight: "50vh",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ mb: 1, color: "white" }}
            >
              Categories
            </FormLabel>
            <RadioGroup
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("type", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="rpg" control={<Radio />} label="RPG" />
              <FormControlLabel
                value="sport"
                control={<Radio />}
                label="Sport"
              />

              <FormControlLabel
                value="shooter"
                control={<Radio />}
                label="Shooter"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <TextField
          className="searchBtn"
          sx={{ mt: 3 }}
          value={search}
          onChange={(e) => {
            fetchByParams();
            setSearch(e.target.value);
          }}
          id="input-with-icon-textfield"
          // label="TexxtField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
