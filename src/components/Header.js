import React, { useState } from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="%PUBLIC_URL%/logo.png" alt="moviedux"></img>
      <h2 className="app-subtitle">
        It's time for your next Movie. Grab your popcorn!!
      </h2>
    </div>
  );
}
