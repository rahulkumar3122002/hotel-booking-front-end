import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import UserData from "./UserData";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Firstroomdata from "./Firstroomdata";
import Secondroomdata from "./Secondroomdata";
import "react-toastify/dist/ReactToastify.css";
import FirstRoom from "./FirstRoom";
import SecondRoom from "./SecondRoom";
import FirstroomPayData from "./FirstroomPayData";
import SecondroomPayData from "./SecondroomPayData";
import Deluxeroom from "./Deluxeroom";
import Deluxeroomdata from "./Deluxeroomdata";
import Deluxeroompaydata from "./Deluxeroompaydata";

import { Context } from "./Context";
import Home from "./Home";

const Router = () => {
  const { bool } = Context();
  return (
    <div>
      {bool === true ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userdata" element={<UserData />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/firstroomdata" element={<Firstroomdata />} />
            <Route path="/secondroomdata" element={<Secondroomdata />} />
            <Route path="/firstroom" element={<FirstRoom />} />
            <Route path="/secondroom" element={<SecondRoom />} />
            <Route path="/firstroompaydata" element={<FirstroomPayData />} />
            <Route path="/secondroompaydata" element={<SecondroomPayData />} />
            <Route path="/deluxeroom" element={<Deluxeroom />} />
            <Route path="/deluxeroomdata" element={<Deluxeroomdata />} />
            <Route path="/deluxeroompaydata" element={<Deluxeroompaydata />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default Router;
