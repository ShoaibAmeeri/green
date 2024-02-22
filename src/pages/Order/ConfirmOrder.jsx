import React from "react";
import { Link } from "react-router-dom";


function ConfirmOrder() {
  return (
    <div>
      <p>your order has been confirm click to back home page</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default ConfirmOrder;
