import React, { useEffect, useState } from 'react'
import countdownBg from "../../Images/countdown-bg.jpg";
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
    const [timeLeft, setTimeLeft] = useState({
        days: 20,
        hours: 45,
        minutes: 18,
        seconds: 9,
      });

      useEffect(() => {
        const timerInterval = setInterval(() => {
          setTimeLeft((prevTime) => {
            let { days, hours, minutes, seconds } = prevTime;
            if (seconds > 0) seconds -= 1;
            else {
              seconds = 59;
              if (minutes > 0) minutes -= 1;
              else {
                minutes = 59;
                if (hours > 0) hours -= 1;
                else {
                  hours = 23;
                  if (days > 0) days -= 1;
                  else clearInterval(timerInterval);
                }
              }
            }
            return { days, hours, minutes, seconds };
          });
        }, 1000);
        return () => clearInterval(timerInterval);
      }, []);

  return (
    <>

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

  <section
        className="countdown spad set-bg"
        style={{ backgroundImage: `url(${countdownBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="countdown__text">
                <h1>Tomorrowland 2020</h1>
                <h4>Music festival starts in</h4>
              </div>
              <div className="countdown__timer" id="countdown-time">
                <div className="countdown__item">
                  <span>{timeLeft.days}</span>
                  <p>days</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.hours}</span>
                  <p>hours</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.minutes}</span>
                  <p>minutes</p>
                </div>
                <div className="countdown__item">
                  <span>{timeLeft.seconds}</span>
                  <p>seconds</p>
                </div>
              </div>
              <div className="buy__tickets">
                <a href="#" className="primary-btn">
                  Buy tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Events