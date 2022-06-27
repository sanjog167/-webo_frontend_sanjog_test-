import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import b1 from "../src/Images/b11.png"
import b2 from "../src/Images/b12.png"
import b3 from "../src/Images/b13.png"
import b4 from "../src/Images/b14.png"
import b5 from "../src/Images/b15.png"
import b6 from "../src/Images/b16.png"
import b7 from "../src/Images/b17.png"
import BrandData from "./BrandData";

function Brand() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="brandSection py-10 mt-0">
    <div className="container">
    <h5 className="mb-4 text-center ">
        Over 32k+ software businesses growing with AR Shakir.
      </h5>

      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 6,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <BrandData image={b1} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b2} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b3} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b4} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b5} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b6} />
        </SwiperSlide>

        <SwiperSlide>
        <BrandData image={b7} />
        </SwiperSlide>
         
  
   

      </Swiper>
    </div>
  
    </section>
  );
}

export default Brand;
