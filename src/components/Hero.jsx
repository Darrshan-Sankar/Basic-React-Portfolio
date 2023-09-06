import React from 'react';
import "./Hero.css";
import { useEffect } from "react";
import AOS from "aos";
import Typed from "typed.js";
import { useRef } from "react";


function Hero() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const el = useRef(null);

      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Machine-Learning Enthusiast", "Web-Developer", "Musician" ], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 30,
          smartBackspace: true,
          loop: true,
          showCursor: true
        });
      }, []);

    return (
      <div id="hero" className="d-flex align-items-center justify-content-center">        
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>Darrshan Seshathrri Sankar<span>.</span></h1>
              <h2 className="hero-subtitle"> I'm <span ref={el}></span> </h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;  