import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/paymentform/Card";
import { useProducts } from "../contexts/ProductContextProvider";

const MoreDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { getGamesDetails, productDetails } = useProducts();

  useEffect(() => {
    getGamesDetails(id);
  }, []);

  return (
    <div>
      <div className="payment">
        <div className="paymentContainer">
          <img className="cardImg" src={productDetails.picture} alt="" />
        </div>
        <div className="paymentRight">
          <h3 className="paymenth3"> {productDetails.name}</h3>
          <div className="paymentDescr">{productDetails.description}</div>
          <div className="paymentButtons">
            <div className="paymentPrice">${productDetails.price}</div>
          </div>
          <Button onClick={() => navigate("/paymentcart")}>BUY</Button>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
