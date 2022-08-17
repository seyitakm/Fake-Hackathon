import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/paymentform/Card";
import { useProducts } from "../contexts/ProductContextProvider";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { getGamesDetails, productDetails } = useProducts();

  useEffect(() => {
    getGamesDetails(id);
  }, []);

  console.log(productDetails);
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
            <button
              className="paymentBtn"
              onClick={() => navigate("/products")}
            >
              back
            </button>
          </div>
        </div>
      </div>
      <div className="rotate"></div>
      <Card />
    </div>
  );
};

export default PaymentPage;
