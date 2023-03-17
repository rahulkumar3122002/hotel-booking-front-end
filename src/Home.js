import React from "react";
import Carousel from "react-bootstrap/Carousel";
import h1img from "./image/home1.jpg";
import h2img from "./image/home2.jpg";
import h3img from "./image/home3.jpg";
import h4img from "./image/home4.jpg";
import Logo from "./Logo";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const homeimg = [h1img, h2img, h3img, h4img];

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          position: "absolute",
          display: "flex",
          zIndex: "2",
          width: "100%",
        }}
      >
        <Logo />
      </div>
      <Carousel>
        {homeimg.map((item) => (
          <Carousel.Item>
            <div
              style={{
                zIndex: "2",
                top: "30%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%,-50%)",
              }}
            >
              <h1
                style={{
                  color: "Black",
                  fontFamily: "'Lobster Two', cursive",
                  fontSize: "70px",
                  margin: "0px",
                  textShadow: "2px 2px 2px ",
                }}
              >
                WELCOME TO MICRA
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                zIndex: "2",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Button
                style={{
                  backgroundColor: "rgb(2,71,254)",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to="/registration"
                >
                  Registration Now
                </Link>
              </Button>
            </div>

            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
              style={{
                height: "100vh",
                width: "100%",
                opacity: "0.9",
              }}
            />
            <Carousel.Caption>
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Click Above Button and Registration Now.....
              </p>
              <p
                style={{
                  color: "black",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                }}
              >
                or
              </p>
              <div
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                All Ready Register?{" "}
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "blue",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
