import React from "react";
import Footer from "../components/Footer";
import { SendEmail } from "../components/SendEmail";

const ContactUsPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6%",
          fontFamily: "impact",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3vw" }}>
          Leave a message, if you have questions!
        </h1>
      </div>
      <SendEmail />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
