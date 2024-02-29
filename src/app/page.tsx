import React from "react";
import "../style/Main.css"
import StarAnimation from "../components/animation/StarAnimation";
import MouseAnimation from "../components/animation/MouseAnimation"
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import SecondItem from "@/components/SecondItem";
import TicTacToe from "../components/TicTacToe"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <MouseAnimation />
      <div>
        <div className="App">
          <Header />
          <Presentation />
          <SecondItem />
          <TicTacToe />
          <Footer />
        </div>
      </div>
      <StarAnimation />
    </>
  );
}
