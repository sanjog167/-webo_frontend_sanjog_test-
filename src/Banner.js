import React from "react";
import bannerImage from "../src/Images/bannerImage.png";
import tick from "../src/Images/tick.png";
import blob from "../src/Images/blob.png";
import Button from '@mui/material/Button';
import { Typewriter } from 'react-simple-typewriter'

function Banner() 
{


 
  return (
  
      <div className="mainBanner position-relative bgGradient overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="mainBanner__left">
                <h1 className="text-start fw-800">
                  {''}
                
   
          <Typewriter
            words={['Managing freelance payments has never been easier']}
           
            cursor
            cursorStyle=''
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
                </h1>
                <p className="text-start text-lgray w-510 fs-20 mt-3">
                  Yet bed any for travelling assistance indulgence unpleasing.
                  Not thoughts all exercise blessing.{" "}
                </p>
                <div className="d-flex align-items-center mt-5">
                <Button variant="contained" >Get Started</Button>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <p>
                    <img src={tick} alt="tick" />
                    <span className="ms-2 text-lgray me-4">Free Register</span>
                  </p>
                  <p>
                    <img src={tick} alt="tick" />
                    <span className="ms-2 text-lgray">Great Service</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mainBanner__right">
                <img src={bannerImage} alt="bannerImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="blob">
          <img src={blob} alt="blob" />
        </div>
      </div>
    

 
  
  );
}

export default Banner;
