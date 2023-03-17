import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

import register from "./image/register.jpg";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

import { Context } from "./Context";

const Home = () => {
  const { setBool3 } = Context();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const submit_data = () => {
    axios
      .post(`http://localhost:1001/router/register`, {
        name: name,
        email: email,
        password: password,
        address: address,
      })
      .then((result) => {
        if (result.data.isValid === true) {
          localStorage.setItem("registration status", result.data.isValid);
          toast.success(result.data.message);
          navigate("/login");
          setBool3(true);
        } else {
          toast.error("please try again.....");
          setBool3(false);
        }
      })
      .catch((error) => {
        console.log("submit data error.....", error);
      });
  };

  return (
    <div>
      <Helmet>
        <style>{"body { background-color:rgb(162, 179, 139) ; }"}</style>
      </Helmet>
      <div
        style={{
          position: "absolute",
          display: "flex",
          zIndex: "2",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <Logo />
        </div>
        <Navbarpg />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Form
          style={{
            width: "40%",
            boxShadow: "5px 5px 10px black ",
            color: "black",
            backgroundColor: "rgb(215, 233, 185)",
            padding: "10px",
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
              src={register}
              alt="wrong"
              style={{
                height: "60px",
                width: "100px",
              }}
            />
          </div>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label
              style={{
                fontFamily: "Lato",
              }}
            >
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              style={{
                fontFamily: "monospace",
                textAlign: "center",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label
              style={{
                fontFamily: "Lato",
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label
              style={{
                fontFamily: "Lato",
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formHorizontalAddress">
            <Form.Label
              column
              style={{
                fontFamily: "Lato",
              }}
            >
              Address
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <hr></hr>
          <Form.Group
            className="mb-3"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button onClick={submit_data}>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Home;
