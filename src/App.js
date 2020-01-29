import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navbar from "./components/Navbar";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <h1>This is my bootstrap experiment!</h1>
        <h2>Obviously I've just started it, and it's a work in progress :-)</h2>
      </div>
    </div>
  );
}
