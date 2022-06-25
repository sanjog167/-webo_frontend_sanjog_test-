import React from "react";
import t1 from "../src/Images/t1.png";
import t2 from "../src/Images/t2.png";
import t3 from "../src/Images/t3.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import TestimonialsData from "./TestimonialsData";

function Brand() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="testimonialSection py-150 mt-0 position-relative">
    <div className="container">
    <h1 className="fw-800">Testimonials</h1>
    <p className="w-530 mt-3">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>

      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
  
        className="mySwiper mt-4"
      >
            <SwiperSlide>
       <TestimonialsData description="With WEBO Digital we know where we’re tracking, we have a clear plan and our marketing isn’t just flying by the seat of our pants." image={t1} name="Brett Craddock" position="GENERAL MANAGER" />
       </SwiperSlide>
       <SwiperSlide>
       <TestimonialsData description="Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship." image={t2} name="Grand Wallis" position="Director" />
       </SwiperSlide>
       <SwiperSlide>
       <TestimonialsData description="The deciding factor was that they understood our needs. There was no “salesy” perspective and they delivered as promised." image={t3} name="Lloyd Morren" position="MANAGING DIRECTOR" />
       </SwiperSlide>

      </Swiper>
    </div>
  
    </section>
  );
}

export default Brand;
