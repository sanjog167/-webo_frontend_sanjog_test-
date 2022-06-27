import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Track() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom",
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".track h3", 1, {
              scale:1,
               
            })

      }, []);

      
    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom",
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".trackLeft p", 1, {
              opacity:1,
              
            })

      }, []);



      useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".track",
                start: "top bottom", 
                end: "bottom",
                   scrub: true,
            }
        })
                  .to(".trackRight .bgGray", 1,  {
                    translateX:20, opacity:1,
              
            })

      }, []);

      

  return (
    <section >
        <div className='container track' ref={ref}>
            <div className='row'>
                <div className='col-lg-6 trackLeft'>
                    <h3 className='fw-800 w-510'>Automated portfolio tracking</h3>
                    <p className='mt-3 w-450'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
                </div>
                <div className='col-lg-6 d-flex align-items-center justify-content-center trackRight'>
                    <div className='bgGray position-relative'>
                    <p className='fw-bold'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.</p>
                    <p className='fw-bold mt-3'>
                    - Mike Taylor, Web Designer
                    </p>
                    </div> 
 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Track