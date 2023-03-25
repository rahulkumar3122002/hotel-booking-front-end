import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "./Context";

import login from "./image/login.jpg";

import { Helmet } from "react-helmet";

import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

const Login = () => {
  const [loginemail, setLoginemail] = useState([]);
  const [loginpassword, setLoginPassword] = useState([]);

  const navigate = useNavigate();

  const { setBool } = Context();
  const { setBool2 } = Context();
  const { setBool4 } = Context();

  const getdata = () => {
    axios
      .get(`http://localhost:1001/router/get_data`)
      .then((result) => {
        console.log("result.....", result);
      })
      .catch((error) => {
        console.log("error.....", error);
      });
  };

  const user_login = () =>
    axios
      .post(`http://localhost:1001/router/login`, {
        email: loginemail,
        password: loginpassword,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        localStorage.setItem("login status", result.data.isValid);

        if (result.data.isValid === true) {
          localStorage.setItem(
            "authorization",
            "Bearer " + result.data.login_token
          );
          axios.defaults.headers.common["authorization"] =
            "Bearer " + result.data.login_token;
          toast.success(result.data.message);
          setBool(true);

          getdata();
          if (result.data.result.role === "admin") {
            localStorage.setItem("role", result.data.result.role);

            setBool2(true);
            navigate("/userdata");
          } else if (result.data.result.role === "user") {
            localStorage.setItem("role", result.data.result.role);
            setBool2(false);
            navigate("/firstroom");
          }

          setBool4(true);
        } else {
          toast.error("Please try again.....");
        }
      })
      .catch((error) => {
        console.log("login error.....", error);
      });

  return (
    <div>
      <Helmet>
        <style>{"body { background-color:rgb(162, 179, 139) ; }"}</style>
      </Helmet>
      <div>
        <Form
          style={{
            width: "30%",
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            boxShadow: "5px 5px 10px black ",
            padding: "10px",
            color: "black",
            backgroundColor: "rgb(215, 233, 185)",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={login}
              alt="wrong"
              style={{
                height: "80px",
              }}
            />
          </div>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setLoginemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button onClick={user_login}>
              Login{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </Button>
          </Form.Group>
          <hr></hr>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            <ArrowLeftRoundedIcon />
            Back
          </Link>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
            to="/forgotpassword"
          >
            Forgot Password?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
