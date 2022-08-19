import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContextProvider";

import { Box, createTheme, flexbox } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// const theme = createTheme();

// theme.StyledTableCell.h3 = {
//   "@media (max-width:600px)": {
//     display: "none",
//   },
// };

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const {
    getCart,
    changeProductCount,
    deleteProductInCart,
    cart,
    addProductToCart,
  } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const trHeadStyle = {
    backgroundColor: "rgb(21, 20, 20) !important",
  };
  const navigate = useNavigate();
  return (
    <TableContainer
      sx={{
        "@media (max-width:600px)": {
          display: "flex",
          flexWrap: "wrap",
        },
      }}
      component={Paper}
    >
      <Table
        sx={{ minWidth: 600, width: "100%" }}
        aria-label="customized table"
      >
        <TableHead sx={{ width: "100%" }}>
          <TableRow>
            <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Type
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Price
            </StyledTableCell>
            <StyledTableCell
              sx={
                (trHeadStyle,
                {
                  "@media (max-width:550px)": {
                    display: "none",
                  },
                })
              }
              align="right"
            >
              Count
            </StyledTableCell>
            <StyledTableCell
              sx={
                (trHeadStyle,
                {
                  "@media (max-width:600px)": {
                    display: "none",
                  },
                })
              }
              align="right"
            >
              Sub Price
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              {" "}
              ---{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="70" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  "@media (max-width:900px)": {
                    display: "none",
                  },
                }}
              >
                {row.item.description}
              </StyledTableCell>

              <StyledTableCell
                align="right"
                sx={{
                  "@media (max-width:900px)": {
                    display: "none",
                  },
                }}
              >
                {row.item.price}
              </StyledTableCell>
              <StyledTableCell align="right">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => deleteProductInCart(row.item.id)}
                  startIcon={<DeleteIcon sx={{ color: "#666699" }} />}
                ></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ m: 5 }}>
        <Typography variant="h6" component="div">
          Total price: {cart?.totalPrice}
          <Button onClick={(cartCleaner) => navigate("/paymentcart")}>
            BUY NOW
          </Button>
        </Typography>
      </Box>
    </TableContainer>
  );
}
