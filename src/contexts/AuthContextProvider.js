import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://35.239.251.89/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (email, password) => {
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const res = await axios.post(`${API}register/`, formData, config);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Error occured");
    }
  };

  const login = async (email, password) => {
    // console.log(user);
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}api/token/`, formData, config);
      navigate("/");
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
    } catch (error) {
      console.log(error);
      setError("Wrong username or password", error);
    }
  };

  async function checkAuth() {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        { headers: { Authorization } }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let username = localStorage.getItem("username");
      setUser(username);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }

  return (
    <authContext.Provider
      value={{ register, login, checkAuth, logout, error, user }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
