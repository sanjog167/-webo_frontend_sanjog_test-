import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';



function Navbar() {


  const [SwitchToggle, setSwitchToggle] = useState(false);



  const toggleBar = () => {
    SwitchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
  };



  return (
    <nav
      className=
        "navbar navbar-expand-lg navbar-light bg-light " 
      
    >
      <div className="container z-9">
        <a className="navbar-brand fw-bold text-black" href="#">
          AR SHAKIR
        </a>

        <Hidden lgDown>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mr-26">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="#"
              >
                Product
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link text-black" href="#">
                Template
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link text-black" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Button variant="text" className="mr-50">
              Sign In
            </Button>
            <Button variant="contained">Start Free</Button>
          </div>
        </div>
        </Hidden>
        <Hidden lgUp>
        <IconButton>
        <MenuIcon onClick={toggleBar}>Burger</MenuIcon>
        </IconButton>
        </Hidden>
      
  
        
      </div>
      <aside className={"slide-bar " +
        (SwitchToggle ? "show" : "") }>
        <nav className="side-mobile-menu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mr-26">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="#"
              >
                Product
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link text-black" href="#">
                Template
              </a>
            </li>
            <li className="nav-item mr-26">
              <a className="nav-link text-black" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className={"body-overlay " + (SwitchToggle ? "active" : "")} onClick={toggleBar}></div>
    </nav>
  );
}

export default Navbar;
