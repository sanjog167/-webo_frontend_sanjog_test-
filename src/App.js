import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Navbar";
import "./style.scss";
import Body from "./Body";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import ScrollTop from "./ScrollTop";


function App() {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);



  const [DayToggle, setDayToggle] = useState(false);

  const toggleDay = () => {
    DayToggle ? setDayToggle(false) : setDayToggle(true);
  };


  return (
    <div className={"App " + (DayToggle ? "dark" : "")  }>
      <div className={
        (scroll ? "sticktop" : "" ) }>
        <Navbar />
        <Switch onClick={toggleDay} />
      </div>

      <Body />
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default App;
