import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

import emailimg from "./image/emailimg.jpg";

import Modal from "react-bootstrap/Modal";

import otp from "./image/otp.jpg";

import resetpassword from "./image/resetpassword.jpg";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const [sendemailotp, setSendEmailOtp] = useState("");

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const [emailotp, setOtp] = useState("");

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [stpass, setStpass] = useState("");

  const forgotpassword = () => {
    axios
      .post(`http://localhost:1001/router/forgot_password`, {
        email: sendemailotp,
      })
      .then((result) => {
        if (result.data.isValid === true) {
          handleShow();
          toast.success("open Gmail.....");
        } else {
          toast.error("please try again.....");
        }
      })
      .catch((error) => {
        console.log("forgot password error.....", error);
      });
  };

  const verifyOtp = () => {
    axios
      .post(`http://localhost:1001/router/verify`, {
        otp: emailotp,
      })
      .then((result) => {
        if (result.data.isValid) {
          handleClose();
          handleShow2();
        } else {
          toast.error("try again.....");
        }
      })
      .catch((error) => {
        console.log("verify otp error.....", error);
      });
  };

  const setpassword = () => {
    axios
      .post(`http://localhost:1001/router/setpassword`, {
        email: email || sendemailotp,
        password: stpass,
      })
      .then((result) => {
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          handleClose2();
          navigate("/login");
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.log("set pass error.....", error);
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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          position: "absolute",
        }}
      >
        <Form
          style={{
            width: "40%",
            boxShadow: "15px 15px 15px black",
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
              src={emailimg}
              alt="wrong"
              style={{
                height: "100px",
              }}
            />
          </div>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                textAlign: "center",
                fontFamily: "monospace",
              }}
              onChange={(e) => setSendEmailOtp(e.target.value)}
            />
          </Form.Group>
          <hr></hr>
          <Form.Group
            className="mb-3"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Button
              onClick={() => {
                forgotpassword();
              }}
            >
              {" "}
              Send Otp
            </Button>
          </Form.Group>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <div style={{ backgroundColor: "rgb(162, 179, 139)" }}>
          <Modal.Header closeButton>Enter Email Otp</Modal.Header>
          <Modal.Body>
            {" "}
            <Form
              style={{
                boxShadow: "5px 5px 10px black ",
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
                  src={otp}
                  alt="wrong"
                  style={{
                    height: "100px",
                  }}
                />
              </div>
              <hr></hr>
              <Form.Group className="mb-3" controlId="formHorizontalOtp">
                <Form.Label column sm={2}>
                  Otp
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Otp"
                  style={{
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group>
              <hr></hr>

              <Form.Group
                className="mb-3"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Button onClick={verifyOtp}>Verify Otp</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </div>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <div style={{ backgroundColor: "rgb(162, 179, 139)" }}>
          <Modal.Header closeButton>
            <Modal.Title>Enter New Password</Modal.Title>
            <hr></hr>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form
              style={{
                boxShadow: "5px 5px 10px black ",
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
                  src={resetpassword}
                  alt="wrong"
                  style={{
                    height: "80px",
                  }}
                />
              </div>
              <hr></hr>
              <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                  defaultValue={sendemailotp}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                  onChange={(e) => setStpass(e.target.value)}
                />
              </Form.Group>
              <hr></hr>
              <Form.Group
                className="mb-3"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Button onClick={setpassword}>set password</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
