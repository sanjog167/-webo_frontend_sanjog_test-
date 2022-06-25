import React, {useRef,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon1 from "../src/Images/icon1.png";
import icon2 from "../src/Images/icon2.png";
import FeatureData from './FeatureData';

function Feature() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".featurebg",
                start: "top center",
                end: "center",
                   scrub: true,
            }
        })
        .to(".featurebg", { backgroundColor: "#C9E7F2", color:"black" })

      }, []);

  return (
    <section className="featurebg position-relative">
      <div className="container" ref={ref}>
        <h1 className="fw-800">Features that blows mind</h1>
        <p className="w-530 mt-3">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="feature__Cards mt-5">
          <FeatureData image={icon2} title="Really boy law county she unable her sister" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
          <FeatureData image={icon1} title="Among sex are leave law built now" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
          <FeatureData title="Merits behind on afraid or warmly"/>
          <FeatureData title="Believing neglected so so allowance existence"/>

        </div>
      </div>
    </section>
  );
}

export default Feature;
