import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

import { animateScroll as scroll } from 'react-scroll';

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link to="/" onClick={scrollToTop}>
            DS<span>.</span>
          </Link>
        </h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <Link to="about" className="get-started-btn scrollto">
          Resume
        </Link>
      </div>
    </header>
  );
}

export default Header;