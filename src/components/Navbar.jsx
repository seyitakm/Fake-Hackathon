import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="inner__appbar">
        <input type="checkbox" id="hamburger" />

        <label for="hamburger">&#9776;</label>
        <div className="inner__logo">
          <h1 onClick={() => navigate("/")}>NIGHT-CITY</h1>
        </div>
        <div className="inner__right">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Store</RouterLink>
          <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/subscribe">Subscriptions</RouterLink>

          <RouterLink to="/contacts">Contacts</RouterLink>
        </div>
        <div className="auth">
          <RouterLink to="/signin">Sign in</RouterLink>
          <RouterLink className="signup" to="/signup">
            Sign up
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
