import React from "react";
import logo from "./image/logo.jpg";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="wrong"
        style={{
          height: "90px",
          padding: "5px",
          width: "85px",
        }}
      />
    </div>
  );
};

export default Logo;
