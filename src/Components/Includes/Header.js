import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <div className="header__logo">
                        {/* <Link to="/"><img src="./assets/img/logo.png" alt=""/></Link> */}
                        <h2 className="mt-2" style={{fontWeight: "bold", color: "#fff"}}>TestLogo</h2>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10">
                    <div className="header__nav">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">About</Link></li>
                                <li><Link to="">Tours</Link></li>
                                <li><Link to="">Videos</Link></li>
                                <li><a href="">Contact</a></li>
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
  )
}
