import React from "react";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <header className="header header--normal">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">
            <div className="header__logo">
            <Link to="/"><img className='logo' src="./assets/img/logo.png" alt=""/></Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  <li>
                    <Link to="/youtube-feed">Videos</Link>
                  </li>
                  <li>
                  <li><Link to="/view-events">Events</Link></li>
                  </li>
                </ul>
              </nav>
              <div className="header__right__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}
