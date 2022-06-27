import React, {useRef,useEffect} from 'react'
import avatar1 from "../src/Images/avatar1.png";
import avatar2 from "../src/Images/avatar2.png";
import avatar3 from "../src/Images/avatar3.png";
import avatar4 from "../src/Images/avatar4.png";
import paytick from "../src/Images/paytick.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Payment() {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
      const element = ref.current;
      gsap.timeline({
          scrollTrigger: {
              trigger: ".payment",
              start: "top bottom",
              end: "bottom",
                 scrub: true,
          }
      })
                .to(".payment__card:nth-child(2)", 1, {
                  translateX:20, opacity:1,
            
          })

    }, []);

    useEffect(() => {
      const element = ref.current;
      gsap.timeline({
          scrollTrigger: {
              trigger: ".payment",
              start: "top bottom",
              end: "bottom",
                 scrub: true,
          }
      })
                .to(".payment__card:nth-child(3)", 1, {
                  translateX:20, opacity:1,
            
          })

    }, []);

  return (
    <section className="pt-10">
      <div className="container payment" ref={ref}>
        <div className="row">
          <div className="col-lg-6">
            <div className="payment__left position-relative">
              <div className="payment__card d-flex mb-4">
                <img src={avatar1} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0">+ $28,900</p>
                  <p className="mb-0">Received from Michael V</p>
                </div>
              </div>
              <div className="payment__card d-flex mb-4">
                <img src={avatar2} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0">+ $28,900</p>
                  <p className="mb-0">Received from Michael V</p>
                </div>
              </div>
              <div className="payment__card d-flex mb-4">
                <img src={avatar3} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0">+ $28,900</p>
                  <p className="mb-0">Received from Michael V</p>
                </div>
              </div>
              <div className="payment__card d-flex">
                <img src={avatar4} alt="avatar" className="w-40 h-40" />
                <div className="payment__cardDescription ms-3">
                  <p className="mb-0">+ $28,900</p>
                  <p className="mb-0">Received from Michael V</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-100 payment__Section">
            <a href="#" className="mb-2 d-flex">WHY CHOOSE US</a>
            <h3 className="fw-800 w-510 mw-100">
              Track your payments on the go with the best way possible
            </h3>
            <p className="mt-3 w-450">
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. 
            </p>
            <hr></hr>
            <div className="payment__List">
            <p className="mb-2">
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Get Overview at a glance</span>
                  </p>
                  <p className="mb-2">
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Deoposit funds easily, securlity</span>
                  </p>
                  <p>
                    <img src={paytick} alt="paytick" />
                    <span className="ms-2 text-lgray">Get Live Support</span>
                  </p>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Payment;
