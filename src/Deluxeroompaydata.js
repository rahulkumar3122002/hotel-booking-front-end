import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import CountUp from "react-countup";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

import data_bg_img from "./image/data_bg_img.jpg";

import Deleteimg from "./image/delete.jpg";

const Deluxeroompaydata = () => {
  const [roomalldata, setRoomAllData] = useState([]);
  const [defaultvalue, setDefaultValue] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dlxroom_data = () => {
    axios
      .get(`http://localhost:1001/router/deluxe_paydata`)
      .then((result) => {
        console.log("result.....", result);
        setRoomAllData(result.data.message);
      })
      .catch((error) => {
        console.log("error.....", error);
      });
  };

  useEffect(() => {
    dlxroom_data();
  }, []);

  const delete_deluxe_room_user_data = (_id) => {
    axios
      .delete(`http://localhost:1001/router/deluxe_paydata_delete/${_id}`)
      .then((result) => {
        console.log("result.....", result);
        handleClose();
        dlxroom_data();
        toast.success(result.data.message);
      })
      .catch((error) => {
        console.log("error.....", error);
        toast.error("try again.....");
      });
  };

  return (
    <div>
      <Helmet>
        <style>{`body { background-image: url(${data_bg_img}); }`}</style>
      </Helmet>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Logo />
        </div>
        <Navbarpg />
      </div>
      <div style={{ height: "30vh" }}>
        <Box
          style={{
            width: 250,
            height: 100,
            top: "30%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            backgroundColor: "rgb(0, 71, 171)",
            borderRadius: "25px",
            color: "white",
            boxShadow: "5px 5px black,-5px -5px black",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Deluxe Room Total Pay Data
          </p>
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <CountUp
              start={0}
              end={roomalldata.length}
              duration={0.5}
              separator=" "
            >
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} style={{ fontSize: "50px" }} />
                </div>
              )}
            </CountUp>
          </p>
        </Box>
      </div>
      <div
        style={{
          fontFamily: "monospace",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <Table
          bordered
          responsive
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <thead>
            <tr>
              <th>User id</th>
              <th>User Email</th>
              <th>User Amount</th>
              <th>Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {roomalldata.map((item, k) => (
              <tr key={k}>
                <td>{k + 1}</td>
                <td>{item.email}</td>
                <td>{item.amount}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShow();
                      setDefaultValue(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div style={{ backgroundColor: "rgb(162, 179, 139)" }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm delete this data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  src={Deleteimg}
                  alt="wrong"
                  style={{
                    height: "80px",
                  }}
                />
              </div>
              <hr></hr>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={defaultvalue.email}
                  disabled
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(_id) => delete_deluxe_room_user_data(defaultvalue._id)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Deluxeroompaydata;
