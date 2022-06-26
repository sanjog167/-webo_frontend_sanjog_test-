import React, { useEffect } from "react";
import icon1 from "../src/Images/icon1.png";
import icon2 from "../src/Images/icon2.png";
import icon3 from "../src/Images/icon3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import BoxData from "./BoxData";

function Boxes() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row gy-4">
          <BoxData
            title="Connect wallets & companies"
            image={icon1}
            description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. "
            numbering="01"
          />
          <BoxData
            title="Review
            transactions"
            image={icon2}
            description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.  "
            numbering="02"
          />
          <BoxData
            title="Get income
            insights"
            image={icon3}
            description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.  "
            numbering="03"
          />
        </div>
      </div>
    </section>
  );
}

export default Boxes;
