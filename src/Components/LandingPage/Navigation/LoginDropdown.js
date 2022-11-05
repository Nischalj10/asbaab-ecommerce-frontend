import React from "react";
import classes from "./LoginDropdown.module.css";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";

const LoginDropdown = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: "LOGOUT", payload: null });
    navigation("/login");
  };

  return (
    <>
      <div className={classes.arrowUp}></div>
      <div className={classes.loginDropdown}>
        <ul>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li style={{ marginBottom: "6px" }}>
              <LoginIcon
                style={{ height: "18px", width: "18px", color: "#383838" }}
              />{" "}
              <span>Login</span>
            </li>
          </Link>
          <li style={{ marginBottom: "6px" }} onClick={logout}>
            <LogoutIcon
              style={{ height: "18px", width: "18px", color: "#383838" }}
            />{" "}
            <span>Logout</span>
          </li>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>
              <HowToRegOutlinedIcon
                style={{ height: "18px", width: "18px", color: "#383838" }}
              />{" "}
              <span>Register</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default LoginDropdown;
