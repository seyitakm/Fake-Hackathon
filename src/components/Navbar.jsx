import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import gayporn from "../assets/gays/gayporn.mp4";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="inner__appbar">
        <div className="inner__logo">
          <h1 onClick={() => navigate("/")}>NIGHT-CITY</h1>
        </div>
        <div className="inner__right">
          <RouterLink to="/latest">Latest</RouterLink>
          <RouterLink to="/store">Store</RouterLink>
          <RouterLink to="/subs">Subscriptions</RouterLink>
          <RouterLink to="/contacts">Contacts</RouterLink>
        </div>
        <div className="auth">
          <RouterLink to="/signin">Sign up</RouterLink>
          <RouterLink className="signup" to="/signup">
            Sign in
          </RouterLink>
        </div>
      </div>
      <video src={gayporn} loop muted autoPlay></video>
    </div>
  );
};

export default Navbar;
