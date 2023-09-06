import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';


import { useEffect } from "react";
import AOS from "aos";

function Footer() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Darrshan Seshathrri K S<span>.</span></h3>
                <p>
                  Sathyamangalam - 02 <br />
                  India<br /><br />
                  <strong>Phone:</strong> +91 93450 92563<br />
                  <strong>Email:</strong> shankardarrshan@gmail.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="https://www.linkedin.com/in/darrshan-seshathrri-k-s/" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://github.com/Darrshan-Sankar" className="github">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="https://www.kaggle.com/darrshanseshathrri" className="kaggle">
                    <i className="fab fa-kaggle"></i>
                  </a>
                  <a href="https://www.instagram.com/_s_musics_/" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://youtube.com/@_smusics_" className="youtube">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="spanning"></div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/resume">Resume</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/projects">Projects</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Projects</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/projects/FRBIDS">Face Recognition based IDS</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/projects/Gait">Gait Analysis</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/projects/AirQuality">Air Quality Forecasting</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/projects/WaterQuality">Water Quality Prediction</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="preloader"></div>
      <Link to="/" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </footer>
  );
}

export default Footer;
