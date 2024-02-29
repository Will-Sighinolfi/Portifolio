import React from "react";
import SideBar from "./SideBar";
import Theme from "./animation/Theme";
import "../style/Header.css";
import "../style/font.css";

export default function Header() {
  return (
    <div className="header slide-animation">
      <div className="icon-header">
        <SideBar />
      </div>
      <div className="centered-content">
        <span>
          <h1 className="title text-color star-wars-text">Oi, eu sou o Will</h1>
        </span>
      </div>
      <div className="Toggle-header">
        <Theme />
      </div>
    </div>
  );
}
