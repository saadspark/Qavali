import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
              <ScrollLink to="hero-section" smooth={true} duration={500}>
                <img className="logo" src="./assets/img/logo.png" alt=""/>
              </ScrollLink>
            </div>
            <button className="menu-btn" onClick={toggleMenu}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className={`header__nav ${menuOpen ? 'open' : ''}`}>
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <ScrollLink to="hero-section" smooth={true} duration={500}>
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="about-section" smooth={true} duration={500}>
                      About
                    </ScrollLink>
                  </li>
                  <li><ScrollLink to="tracks-section" smooth={true} duration={500}>Tracks</ScrollLink></li>
                  <li><ScrollLink to="youtube-feed" smooth={true} duration={500}>Videos</ScrollLink></li>
                  <li><ScrollLink to="events-section" smooth={true} duration={500}>Events</ScrollLink></li>
                </ul>
              </nav>
              <div className="header__right__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}
