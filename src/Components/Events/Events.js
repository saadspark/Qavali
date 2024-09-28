import React from 'react'
import Header2 from '../Includes/Header2'
import Footer from '../Includes/Footer'
import event1 from "../../Images/event1.jpeg";
import event2 from "../../Images/event2.jpeg";
import event3 from "../../Images/event3.jpeg";
import event4 from "../../Images/event4.jpeg";
import event5 from "../../Images/event5.jpeg";
import event6 from "../../Images/event6.jpeg";
import event7 from "../../Images/event7.jpeg";
import event8 from "../../Images/event8.jpeg";
import event9 from "../../Images/event9.jpeg";
import event10 from "../../Images/event10.jpeg";

import './Events.css'

function Events() {
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


      <section class="events">
    <h2 className="event">Upcoming Events</h2>
    <div class="events-container">
      <div class="event-card">
        <img src={event1} alt="Event 1" class="event-image"/>
        <div class="event-info">
          <p>Date: 27th Aug 2024</p>
          <p>Location: Karachi, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event2} alt="Event 2" class="event-image"/>
        <div class="event-info">
          <p>Date: 16th Sep 2024</p>
          <p>Location: faisalabad, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event3} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 24th Aug 2024</p>
          <p>Location: faisalabad, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event4} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 31th Aug 2024</p>
          <p>Location: Islamabad, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event5} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 15th Sep 2024</p>
          <p>Location: faisalabad, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event6} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 20th Sep 2024</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event7} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 17th Sep 2024</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>

      <div class="event-card">
        <img src={event8} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 28th October 2024</p>
          <p>Location: Mankera, Pakistan</p>
        </div>
      </div>

      <div class="event-card">
        <img src={event9} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 12th Sep 2024</p>
          <p>Location: Gojra, Pakistan</p>
        </div>
      </div>
      <div class="event-card">
        <img src={event10} alt="Event 3" class="event-image"/>
        <div class="event-info">
          <p>Date: 22th Sep 2024</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  </section>


  <div class="spacer"></div>
    <Footer/>
    </>
  )
}

export default Events