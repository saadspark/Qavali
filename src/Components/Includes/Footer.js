import React from 'react'
import footerBg from '../../Images/footer-bg.png';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer class="footer spad set-bg" style={{ backgroundImage: `url(${footerBg})`}}>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="footer__address">
                    <ul>
                        <li>
                            <i class="fa fa-phone"></i>
                            <p>Phone</p>
                            <h6>1-677-124-44227</h6>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <p>Email</p>
                            <h6>qawali@gmail.com</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 col-md-6">
                <div class="footer__social">
                <Link to="/"><img className="footer-logo" src="./assets/img/logo.png" alt=""/></Link>
                    {/* <h2>TestLogo</h2> */}
                    <div class="footer__social__links">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 offset-lg-1 col-md-6">
                <div class="footer__newslatter">
                    <h4>Stay With me</h4>
                    <form action="#">
                        <input type="text" placeholder="Email"/>
                        <button type="submit"><i class="fa fa-send-o"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer__copyright__text">
        <p>Copyright &copy; {currentYear} All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}
