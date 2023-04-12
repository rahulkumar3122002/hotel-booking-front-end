import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";

import data_bg_img from "./image/data_bg_img.jpg";

import Box from "@mui/material/Box";
import CountUp from "react-countup";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

import Deleteimg from "./image/delete.jpg";
import Updateimg from "./image/update.jpg";

const Deluxeroomdata = () => {
  const [alldata, setAlldata] = useState([]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const [value, setValue] = useState("");

  const [updateperson, setUpdatePerson] = useState("");
  const [updateroomNo, setUpdateroomNo] = useState("");
  const [updateroomType, setUpdateroomType] = useState("");
  const [updatecheckInDate, setUpdatecheckInDate] = useState("");
  const [updatecheckOutDate, setUpdatecheckOutDate] = useState("");

  const [updtvalue, setUpdtvalue] = useState("");

  const deluxeroomdata = () => {
    axios
      .get(`http://localhost:1001/router/dlroom_data`)
      .then((result) => {
        setAlldata(result.data.message);
      })
      .catch((error) => {
        console.log("error.....", error);
      });
  };

  const deletedata = (_id) => {
    axios
      .delete(`http://localhost:1001/router/dlroom_delete/${_id}`)
      .then((result) => {
        console.log("delete data successfully.....");
        toast.success("data delete successfully.....");
        handleClose();
        deluxeroomdata();
      })
      .catch((error) => {
        console.log("try again.....");
        toast.error("data delete successfully.....");
        handleClose();
      });
  };

  const updateamountdata = (_id) => {
    axios
      .post(`http://localhost:1001/router/dlroom_update/${_id}`, {
        person: updateperson || value.person,
        roomType: updateroomType || value.roomType,
        roomNo: updateroomNo || value.roomNo,
        checkInDate: updatecheckInDate || value.checkInDate,
        checkOutDate: updatecheckOutDate || value.checkOutDate,
      })
      .then((result) => {
        console.log("result.....", result);
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          handleClose2();
          deluxeroomdata();
        } else {
          toast.error(result.data.message);
          handleClose2();
          deluxeroomdata();
        }
      })
      .catch((error) => {
        console.log("error.....", error);
        handleClose2();
      });
  };

  useEffect(() => deluxeroomdata, []);

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
            Deluxe Room Total Data
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
              end={alldata.length}
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
              <th>No</th>
              <th>Email</th>
              <th>Person</th>
              <th>roomType</th>
              <th>roomNo</th>
              <th>checkInDate</th>
              <th>checkOutDate</th>
              <th>Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.email}</td>
                <td>{item.person}</td>
                <td>{item.roomType}</td>
                <td>{item.roomNo}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShow();
                      setValue(item);
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
                      handleShow2();
                      setUpdtvalue(item);
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
        <div style={{ backgroundColor: "rgb(162, 179, 139)" }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete Data</Modal.Title>
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
                <Form.Control type="email" value={value.email} disabled />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(_id) => deletedata(value._id)}>
              Delete
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <div style={{ backgroundColor: "rgb(162, 179, 139)" }}>
          <Modal.Header closeButton>
            <Modal.Title>Data Update Form</Modal.Title>
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
                  src={Updateimg}
                  alt="wrong"
                  style={{
                    height: "80px",
                  }}
                />
              </div>
              <hr></hr>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  defaultValue={updtvalue.email}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPerson">
                <Form.Label>Person</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Person"
                  defaultValue={updtvalue.person}
                  onChange={(e) => setUpdatePerson(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicroomNo">
                <Form.Label>roomNo</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={6}
                  placeholder="roomNo"
                  defaultValue={updtvalue.roomNo}
                  onChange={(e) => setUpdateroomNo(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicroomType">
                <Form.Label>roomType</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="roomType"
                  defaultValue={updtvalue.roomType}
                  onChange={(e) => setUpdateroomType(e.target.value)}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiccheckInDate">
                <Form.Label>checkInDate</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="checkInDate"
                  defaultValue={updtvalue.checkInDate}
                  onChange={(e) => setUpdatecheckInDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiccheckOutDate">
                <Form.Label>checkOutDate</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="checkOutDate"
                  defaultValue={updtvalue.checkOutDate}
                  onChange={(e) => setUpdatecheckOutDate(e.target.value)}
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
              onClick={(_id) => updateamountdata(updtvalue._id)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Deluxeroomdata;
