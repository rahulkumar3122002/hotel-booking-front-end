import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import CountUp from "react-countup";

import data_bg_img from "./image/data_bg_img.jpg";

import axios from "axios";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

const UserData = () => {
  const [Getdata, setGetdata] = useState([]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [updatename, setName] = useState("");
  const [updatepassword, setPassword] = useState("");
  const [updateaddress, setAddress] = useState("");

  const [defaultdata, setDefaultdata] = useState("");

  const getdata_api = () => {
    axios
      .get(`http://localhost:1001/router/get_data`)
      .then((result) => {
        setGetdata(result.data.message);
      })
      .catch((error) => {
        console.log("get data error.....", error);
      });
  };

  useEffect(() => {
    getdata_api();
  }, []);

  const delete_user_data = (_id) => {
    axios
      .delete(`http://localhost:1001/router/delete_data/${_id}`)
      .then((result) => {
        if (result.data.isValid) {
          handleClose2();
          toast.success(result.data.message);
          getdata_api();
        } else {
          toast.error("please try again.....");
        }
      })
      .catch((error) => {
        console.log("delete error data.....", error);
      });
  };

  const updatedata = (_id) => {
    axios
      .post(`http://localhost:1001/router/update_data/${_id}`, {
        name: updatename || defaultdata.name,
        password: updatepassword || defaultdata.password,
        address: updateaddress || defaultdata.address,
      })
      .then((result) => {
        if (result.data.isValid) {
          toast.success(result.data.message);
          console.log("ud.....", result);
          getdata_api();
        } else {
          toast.error("please try again.....");
          console.log("ud.....", result);
        }
      })
      .catch((error) => {
        console.log("update data error.....", error);
      });
    handleClose();
  };

  return (
    <div>
      <Helmet>
        <style>{`body { background-image: url(${data_bg_img}); }`}</style>
      </Helmet>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%", justifyContent: "end" }}>
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
            Total UserData
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
              end={Getdata.length}
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
            color: "white",
            backgroundColor: "black",
          }}
        >
          <thead>
            <tr>
              <th>User id</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Address</th>
              <th>Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {Getdata.map((item, k) => (
              <tr key={k}>
                <td>{k + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShow2();
                      setDefaultdata(item);
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
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      setDefaultdata(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Data Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={defaultdata.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={defaultdata.email}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                defaultValue={defaultdata.address}
                onChange={(e) => setAddress(e.target.value)}
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
            onClick={(_id) => updatedata(defaultdata._id)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={defaultdata.email}
                disabled
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(_id) => delete_user_data(defaultdata._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserData;
