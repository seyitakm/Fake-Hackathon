import * as React from "react";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/Auth.css";

import Countries from "../components/Countries";

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

export default function SignUpPage() {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [password2, setPassword2] = React.useState("");

  const [changeColorProfile, setChangeColorProfile] = React.useState("#adadad");
  const [changeColorLock, setChangeColorLock] = React.useState("#adadad");

  function handleRegister(email, password) {
    if (password2 !== password) {
      alert("passwords don't match");
      return;
    }

    register(email, password);
  }

  return (
    <div className="auth-main">
      <div className="auth-block">
        <h3 className="auth-header">Sign Up</h3>
        <div className="auth__input-block">
          <p>Username</p>
          <div className="auth-input__form">
            <label htmlFor="email">
              <PersonOutlineIcon
                id="usernameInp"
                className="auth-input__icon"
                sx={{ color: changeColorProfile, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Type username"
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
          <p>Create password</p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon
                id="userpasswordInp"
                className="auth-input__icon"
                sx={{ color: changeColorLock, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Type password"
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
        <div className="auth__input-block">
          <p>Retype password</p>
          <div className="auth-input__form">
            <label htmlFor="password">
              <LockOutlinedIcon
                id="userpasswordInp"
                className="auth-input__icon"
                sx={{ color: changeColorLock, transition: "all 100ms" }}
              />
            </label>
            <input
              placeholder="Retype password"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              onFocus={() => setChangeColorLock("#8C2CEF")}
              onBlur={() => setChangeColorLock("#adadad")}
            />
          </div>

          {/* <span>
            {password2 === password ? null : <h1> Passwords dont match</h1>}{" "}
          </span> */}
        </div>
        <Countries />
        {error ? (
          <Typography sx={{ color: "red", m: 1 }}>{error}</Typography>
        ) : null}
        <button
          className="auth-btn"
          onClick={() => handleRegister(email, password)}
        >
          Sign Up
        </button>
        <div className="auth-another">
          <p className="auth-another__hint">Already Sign up? </p>
          <button onClick={() => navigate("/signin")} className="auth-link">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
