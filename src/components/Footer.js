import React from "react";
import "../styles.css";
import { useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date());
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <p className="footer-text">
          @ {currentYear} Moviedux, All rights reserved.
        </p>
      </footer>
    </div>
  );
}
