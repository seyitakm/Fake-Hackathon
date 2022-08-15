import React, { useState } from "react";
// import "../styles/AuthPage.css";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInPage() {
  const navigate = useNavigate();

  const { login, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [changeColorProfile, setChangeColorProfile] = useState("#adadad");
  const [changeColorLock, setChangeColorLock] = useState("#adadad");
  // console.log(email, password);

  function handleLogin(email, password) {
    login(email, password);
  }

  return (
    <div className="auth-main">
      <div className="auth-block">
        <h3 className="auth-header">Sign In</h3>
        <div className="auth__input-block">
          <p>Username</p>
          <div className="auth-input__form">
            <label htmlFor="email">
              <PersonOutlineIcon
                id="usernameInp"
                sx={{ color: changeColorProfile, transition: "all 100ms" }}
                className="auth-input__icon"
              />
            </label>
            <input
              placeholder="Type your username"
              className="auth-input"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setChangeColorProfile("#8C2CEF")}
              onBlur={() => setChangeColorProfile("#adadad")}
            />
          </div>
        </div>
        <div className="auth__input-block">
          <p>Password</p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon
                id="userpasswordInp"
                sx={{ color: changeColorLock, transition: "all 100ms" }}
                className="auth-input__icon"
              />
            </label>
            <input
              placeholder="Type your password"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setChangeColorLock("#8C2CEF")}
              onBlur={() => setChangeColorLock("#adadad")}
            />
          </div>
        </div>
        {error ? (
          <Typography sx={{ color: "red", m: 1 }}>{error}</Typography>
        ) : null}
        <button
          className="auth-btn"
          onClick={() => handleLogin(email, password)}
        >
          Sign In
        </button>
        <div className="auth-another">
          <p className="auth-another__hint">Or Sign Up</p>
          <button onClick={() => navigate("/signup")} className="auth-link">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
