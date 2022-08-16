import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/paymentform/Card";
import { useProducts } from "../contexts/ProductContextProvider";

const PaymentPage = () => {
  const { id } = useParams();
  console.log(id);

  const { getGamesDetails, productDetails } = useProducts();

  useEffect(() => {
    getGamesDetails(id);
  }, []);

  console.log(productDetails);
  return (
    <div>
      <div className="paymentContainer">
        <img className="cardImg" src={productDetails.picture} alt="" />
        <h3 className="paymenth3"> {productDetails.name}</h3>
        <div className="paymentPrice">${productDetails.price}</div>
        <div className="paymentDescr">{productDetails.description}</div>
      </div>
      <Card />
    </div>
  );
};

export default PaymentPage;
