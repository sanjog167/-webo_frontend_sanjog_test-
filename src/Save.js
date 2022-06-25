import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hand from "../src/Images/hand.png";

function Save() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);


  useEffect(() => {
    const element = ref.current;
    gsap.timeline({
        scrollTrigger: {
            trigger: ".saveMoney_background",
            start: "top bottom",
            end: "bottom",
               scrub: true,
        }
    })
              .to(".handAnimate", 1, {
                height:900,
          
        })

  }, []);

  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 payment__Section m-auto">
          <a href="#" className="mb-2 d-flex">WHY CHOOSE US</a>
          <h3 className="fw-800 w-510">
          Save money with
proper transaction
          </h3>
          <p className="mt-3 w-390">
          We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.          </p>
          <div className='bgGray position-relative w-530'>
                    <p className='fw-bold text-black'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows.</p>
                    <p className='fw-bold text-black mt-3'>
                    - Mike Taylor, Web Designer
                    </p>
                    </div>
        </div>
        <div className="col-lg-6">
            <div className='saveMoney_background position-relative'>
              <img src={hand} alt="" className='handAnimate'/>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Save