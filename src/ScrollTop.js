import React, { useState, useEffect } from "react";

function ScrollTop() {

    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScrollTop(window.scrollY > 200);
      });
    }, []);

    const goToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

  return (
    <div className={"scrolltop " + (scrollTop ? "gotop" : '')} onClick={goToTop}><i className="fa fa-chevron-up" ></i></div>
  )
}

export default ScrollTop 