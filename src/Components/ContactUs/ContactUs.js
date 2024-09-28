import React from 'react'
import Header2 from '../Includes/Header2'
import Footer from '../Includes/Footer'
import ucImge from "../../Images/underConstruction.jpg";
import './ContactUs.css'

function ContactUs() {
  return (
    <>
    <Header2/>
    <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
                <a href="#">
                  <i class="fa fa-home"></i> Home
                </a>
                <span>Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section class="contact-us">
    <div class="container">
      <h1>Contact Us</h1>
      <p>Our "Contact Us" page is currently under construction. 
        We're working hard to get things ready. Please check back soon!</p>
      
      <div class="construction-image">
        <img src={ucImge} alt="Under Construction"/>
      </div>
      
    </div>
  </section>


  <div class="spacer"></div>
    <Footer/>
    </>
  )
}

export default ContactUs