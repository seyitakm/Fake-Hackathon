import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default class Card extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="auth-main">
        <div className="auth-block">
          <div id="PaymentForm">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5%",
              }}
            >
              <input
                className="paymentF1"
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="paymentF1"
                type="tel"
                name="name"
                placeholder="Card Holder"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="paymentF2"
                type="tel"
                name="expiry"
                placeholder="expiry date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className="paymentF2"
                type="tel"
                name="cvc"
                placeholder="cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              ...
              <button>Buy</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
