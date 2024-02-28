import React from "react";
import { Link } from "react-router-dom";

import "./Topbar.css";
function Topbar() {
  return (
    <div className="topbar">
      <div className="nav">
        <Link to="/" className="navbar-logo fa-fade">
          Techy Software<i class="fa-solid fa-t fa-sm fa-fade"></i>
          <i class="fa-solid fa-s  fa-sm fa-fade"></i>
        </Link>
      </div>
      <div className="nav">
        <a href="/">Home </a>
        <a href="/AboutUS">About US </a>
        <a href="/ProductServices">Product/Services </a>
        <a href="/ContactUS">Contact US </a>
      </div>
    </div>
  );
}

export default Topbar;
