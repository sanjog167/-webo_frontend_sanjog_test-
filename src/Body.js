import React from 'react'
import Banner from "./Banner";
import Brand from "./Brand";
import Track from "./Track";
import Boxes from "./Boxes";
import Payment from "./Payment";
import Save from "./Save";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Disccover from "./Disccover";

function Body() {
  return (
    <div>
     <Banner />
      <Brand />
      <Track />
      <Boxes />
      <Payment />
      <Save />
      <Feature />
      <Testimonials />
      <Stats />
      <Blog /> 
      <FAQ />
      <Disccover />
    </div>
  )
}

export default Body