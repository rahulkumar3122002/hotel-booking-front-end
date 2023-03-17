import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import CountUp from "react-countup";

import data_bg_img from "./image/data_bg_img.jpg";

import Navbarpg from "./Navbarpg";
import Logo from "./Logo";

import { Helmet } from "react-helmet";

const AmountData = () => {
  const [Amountdata, setAmountData] = useState([]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const [defaultvalue, setDefaultValue] = useState("");

  const [updateperson, setUpdatePerson] = useState("");
  const [updateroomNo, setUpdateroomNo] = useState("");
  const [updatecheckInDate, setUpdatecheckInDate] = useState("");
  const [updatecheckOutDate, setUpdatecheckOutDate] = useState("");

  const GetAmountData = () => {
    axios
      .get(`http://localhost:1001/router/second_room_getamountdata`)
      .then((result) => {
        console.log("result.....", result.data.message);
        setAmountData(result.data.message);
      })
      .catch((error) => {
        console.log("error.....", error);
      });
  };

  useEffect(() => {
    GetAmountData();
  }, []);

  const deleteamountdata = (_id) => {
    axios
      .delete(
        `http://localhost:1001/router/second_room_deleteamountdata/${_id}`
      )
      .then((result) => {
        if (result.data.isValid === true) {
          handleClose2();
          toast.success(result.data.message);
          GetAmountData();
        } else {
          toast.error("try again.....");
        }
      })
      .catch((error) => {
        console.log("error.....", error);
        toast.error("try again.....");
      });
  };

  const updateamountdata = (_id) => {
    axios
      .post(
        `http://localhost:1001/router/second_room_updateamountdata/${_id}`,
        {
          person: updateperson || defaultvalue.person,
          roomNo: updateroomNo || defaultvalue.roomNo,
          checkInDate: updatecheckInDate || defaultvalue.checkInDate,
          checkOutDate: updatecheckOutDate || defaultvalue.checkOutDate,
        }
      )
      .then((result) => {
        console.log("result.....", result);
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          GetAmountData();
        } else {
          toast.error(result.data.message);
          GetAmountData();
        }
      })
      .catch((error) => {
        console.log("error.....", error);
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
            7star Room Total Data
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
              end={Amountdata.length}
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
              <th>user id</th>
              <th>email</th>
              <th>person</th>
              <th>roomType</th>
              <th>roomNo</th>
              <th>checkInDate</th>
              <th>checkOutDate</th>
              <th>Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {Amountdata.map((item, k) => (
              <tr key={k}>
                <td>{k + 1}</td>
                <td>{item.email}</td>
                <td>{item.person}</td>
                <td>{item.roomType}</td>
                <td>{item.roomNo}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>
                  {" "}
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      setDefaultValue(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleShow2();
                      setDefaultValue(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </Button>{" "}
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={defaultvalue.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPerson">
              <Form.Label>Person</Form.Label>
              <Form.Control
                type="text"
                placeholder="Person"
                defaultValue={defaultvalue.person}
                onChange={(e) => setUpdatePerson(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicroomNo">
              <Form.Label>roomNo</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={6}
                placeholder="Person"
                defaultValue={defaultvalue.roomNo}
                onChange={(e) => setUpdateroomNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiccheckInDate">
              <Form.Label>checkInDate</Form.Label>
              <Form.Control
                type="date"
                placeholder="checkInDate"
                defaultValue={defaultvalue.checkInDate}
                onChange={(e) => setUpdatecheckInDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiccheckOutDate">
              <Form.Label>checkOutDate</Form.Label>
              <Form.Control
                type="date"
                placeholder="checkOutDate"
                defaultValue={defaultvalue.checkOutDate}
                onChange={(e) => setUpdatecheckOutDate(e.target.value)}
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
            onClick={(_id) => updateamountdata(defaultvalue._id)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>final delete this data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                defaultValue={defaultvalue.email}
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
            onClick={(_id) => deleteamountdata(defaultvalue._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AmountData;
