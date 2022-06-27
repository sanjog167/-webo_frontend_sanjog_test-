import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '@mui/material/Button';

function Disccover() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);


  useEffect(() => {
    const element = ref.current;
    gsap.timeline({
        scrollTrigger: {
            trigger: ".discoverSection",
            start: "top bottom",
            end: "bottom",
               scrub: true,
        }
    })
              .to(".discoverContainer", 1, {
          scale:1, marginTop:0,
           
        })

  }, []);

  return (
    <section className='discoverSection' >
        <div className='container position-relative discoverContainer overflow-hidden px-xs-0' ref={ref} >
            <div className='bg-blue text-white py-150 border-20 position-relative'>
                <h3 className='w-760 m-auto text-center mb-5 position-relative'>Discover a better way to manage spendings</h3>
                <Button variant="contained" className='btn-orange'>Get Started</Button>
            </div>
        </div>
    </section>
  )
}

export default Disccover