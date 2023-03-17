import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import firstroomimg1 from "./image/firstroom1.jpg";
import firstroomimg2 from "./image/firstroom2.jpg";
import firstroomimg3 from "./image/firstroom3.jpg";
import firstroomimg4 from "./image/firstroom4.jpg";
import firstroomimg5 from "./image/firstroom5.jpg";
import firstroomimg6 from "./image/firstroom6.jpg";
import Navbarpg from "./Navbarpg";
import Logo from "./Logo";
import { Helmet } from "react-helmet";
import fivestarroomimg from "./image/5star_room.jpg";

const FirstRoom = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const [key, setKey] = useState("");
  const [keyroom, setKeyroom] = useState("");

  const arr = [
    firstroomimg1,
    firstroomimg2,
    firstroomimg3,
    firstroomimg4,
    firstroomimg5,
    firstroomimg6,
  ];

  const [amountemail, setAmountEmail] = useState("");
  const [amountperson, setAmountPerson] = useState("");
  const [amountroomType] = useState("5star room");
  const [amountcheckInDate, setAmountCheckInDate] = useState("");
  const [amountcheckOutDate, setAmountCheckOutDate] = useState("");

  const submitamountdata = () => {
    axios
      .post(`http://localhost:1001/router/first_room`, {
        email: amountemail,
        person: amountperson,
        roomNo: key,
        checkInDate: amountcheckInDate,
        checkOutDate: amountcheckOutDate,
      })
      .then((result) => {
        console.log("result.....", result);
        if (result.data.isValid === true) {
          console.log("amount pay successfully.....");
          toast.success(result.data.message);
          handleClose();
          handleShow2();
        } else {
          console.log("try again.....");
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.log("error.....", error);
        toast.error("try again.....");
      });
  };

  const [card_number, setCard_Number] = useState("");
  const [amount] = useState("3500");
  const [expiry_date, setExpiry_Date] = useState("");
  const [cvc_or_cvv_no, setCVC_Or_CVV_No] = useState("");

  const paydata = () => {
    axios
      .post(`http://localhost:1001/router/first_room_pay_amount`, {
        email: amountemail,
        card_number: card_number,
        amount: amount,
        expiry_date: expiry_date,
        cvc_or_cvv_no: cvc_or_cvv_no,
      })
      .then((result) => {
        console.log("result.....", result);
        if (result.data.isValid === true) {
          console.log("amount pay successfully.....");
          toast.success(result.data.message);
          handleClose2();
        } else {
          console.log("try again.....");
          toast.error(result.data.message);
        }
      })
      .catch((error) => {
        console.log("error.....", error);
        toast.error("try again.....");
      });
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
      }}
    >
      <Helmet>
        <style>{"body { background-color:rgb(162, 179, 139) ; }"}</style>
      </Helmet>
      <div style={{ display: "flex" }}>
        <div>
          <Logo />
        </div>
        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <Navbarpg />
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
        style={{
          width: "100vw",
        }}
      >
        {arr.map((item, key) => (
          <div className="col">
            <div className="card shadow-sm">
              <rect width="100%" height="100%" fill="#55595c">
                <img src={item} alt="wrong" width="100%" height="225" />
              </rect>
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgb(215, 233, 185)",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p>PRICE : 3500</p>
                  <p>5star room</p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      setKey(key + 1);
                      setKeyroom(item);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <div
          style={{
            backgroundColor: "rgb(162, 179, 139)",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>room no:{key}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <rect width="100%" height="100%">
              <img src={keyroom} alt="wrong" width="100%" height="225" />
            </rect>
            <hr></hr>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={fivestarroomimg}
                alt="wrong"
                style={{
                  height: "80px",
                }}
              />
            </div>
            <hr></hr>
            <Form
              style={{
                boxShadow: "5px 5px 10px black ",
                padding: "10px",
                color: "black",
                backgroundColor: "rgb(215, 233, 185)",
              }}
            >
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={3}>
                  Email
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setAmountEmail(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPerson"
              >
                <Form.Label column sm={3}>
                  Person
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="number"
                    min={1}
                    max={4}
                    placeholder="Person"
                    onChange={(e) => setAmountPerson(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalroomNo"
              >
                <Form.Label column sm={3}>
                  roomNo
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="Number"
                    min={1}
                    max={6}
                    placeholder="roomNo"
                    value={key}
                    disabled
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalroomType"
              >
                <Form.Label column sm={3}>
                  roomType
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="roomType"
                    defaultValue={amountroomType}
                    disabled
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalcheckInDate"
              >
                <Form.Label column sm={3}>
                  checkInDate
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    placeholder="checkInDate"
                    onChange={(e) => setAmountCheckInDate(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalcheckOutDate"
              >
                <Form.Label column sm={3}>
                  checkOutDate
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    placeholder="checkOutDate"
                    onChange={(e) => setAmountCheckOutDate(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={() => {
                submitamountdata();
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <div
          style={{
            backgroundColor: "rgb(162, 179, 139)",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>room no:{key} || 5star room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              class="card"
              style={{
                boxShadow: "5px 5px 10px black ",
                padding: "10px",
                color: "black",
                backgroundColor: "rgb(215, 233, 185)",
              }}
            >
              <div
                class="card-header p-0"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <h2 class="mb-0">
                  <button
                    style={{ backgroundColor: "#727272" }}
                    class="btn btn-light btn-block text-left p-3 rounded-0"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div class="d-flex align-items-center justify-content-between">
                      <span>Credit card</span>
                      <div class="icons">
                        <img
                          src="https://i.imgur.com/2ISgYja.png"
                          width="30"
                          alt="wrong"
                        />
                        <img
                          src="https://i.imgur.com/W1vtnOV.png"
                          width="30"
                          alt="wrong"
                        />
                        <img
                          src="https://i.imgur.com/35tC99g.png"
                          width="30"
                          alt="wrong"
                        />
                        <img
                          src="https://i.imgur.com/2ISgYja.png"
                          width="30"
                          alt="wrong"
                        />
                      </div>
                    </div>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body payment-card-body">
                  <span class="font-weight-normal">Email</span>
                  <div class="input">
                    <i class="fa fa-email"></i>
                    <input
                      type="Email"
                      class="form-control"
                      value={amountemail}
                      disabled
                    />
                  </div>
                  <div class="row mt-3 mb-3">
                    <div class="col-md-6">
                      <span class="font-weight-normal card-text">
                        Card Number
                      </span>
                      <div class="input">
                        <i class="fa fa-credit-card"></i>
                        <input
                          type="Number"
                          class="form-control"
                          placeholder="0000 0000 0000 0000"
                          onChange={(e) => setCard_Number(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <span class="font-weight-normal card-text">Amount</span>
                      <div class="input">
                        <i class="fa fa-lock"></i>
                        <input
                          type="String"
                          class="form-control"
                          placeholder="amount"
                          value={amount}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mt-3 mb-3">
                    <div class="col-md-6">
                      <span class="font-weight-normal card-text">
                        Expiry Date
                      </span>
                      <div class="input">
                        <i class="fa fa-calendar"></i>
                        <input
                          type="date"
                          class="form-control"
                          onChange={(e) => setExpiry_Date(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <span class="font-weight-normal card-text">CVC/CVV</span>
                      <div class="input">
                        <i class="fa fa-lock"></i>
                        <input
                          type="Number"
                          class="form-control"
                          placeholder="000"
                          onChange={(e) => setCVC_Or_CVV_No(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="success" onClick={paydata}>
              Pay
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default FirstRoom;
