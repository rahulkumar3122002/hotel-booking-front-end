import "./App.css";
import { ToastContainer } from "react-toastify";
import Router from "./Router";
import React, { useState, useEffect } from "react";
import { AppContext } from "./Context";
import axios from "axios";

function App() {
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common["authorization"] =
      localStorage.getItem("authorization");
    axios
      .post(`http://localhost:1001/router/tkn_vrfy`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (result) => {
        if (result.data.isValid === true) {
          setBool(true);
          if (localStorage.getItem("role") === "admin") {
            setBool2(true);
          } else if (localStorage.getItem("role") === "admin") {
            setBool2(false);
          }
          if (localStorage.getItem("registration status") === true) {
            setBool3(true);
          }
          if (localStorage.getItem("login status") === true) {
            setBool4(true);
          }
        }
      })
      .catch((error) => {
        console.log("error.....", error);
      });
  });

  return (
    <div>
      <ToastContainer />
      <AppContext.Provider
        value={{
          bool,
          setBool,
          bool2,
          setBool2,
          bool3,
          setBool3,
          bool4,
          setBool4,
        }}
      >
        <Router />
      </AppContext.Provider>
    </div>
  );
}

export default App;
