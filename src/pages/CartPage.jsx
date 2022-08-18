import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            color: "white",
            border: "6px dotted teal",
            marginBottom: "5%",
            fontFamily: "impact",
            fontSize: "4vw",
          }}
        >
          My orders
        </h1>
      </div>
      <Cart />
    </div>
  );
};

export default CartPage;
