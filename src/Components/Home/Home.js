import React, { useEffect, useRef, useState } from "react";
import Header from "../Includes/Header";
import heroBg from "../../Images/hero-bg.png";
import heroBg2 from "../../Images/hero-bg2.png";
import heroBg3 from "../../Images/hero-bg3.png";
import heroBg4 from "../../Images/hero-bg4.png";
import heroBg5 from "../../Images/hero-bg5.png";
import aboutImage from "../../Images/about.jpg";
import serviceOne from "../../Images/service-1.png";
import serviceTwo from "../../Images/service-2.png";
import serviceThree from "../../Images/service-3.png";
import serviceFour from "../../Images/service-4.png";
import serviceLeft from "../../Images/service-left.png";
import trackRight from "../../Images/track-right.webp";
import countdownBg from "../../Images/countdown-bg.jpg";
import pianoImage from "../../Images/piano.png";
import tablaImage from "../../Images/tabla.png";
import instagramIcon from "../../Images/soical1.png";
import spotifyIcon from "../../Images/soical2.png";
import youtubeIcon from "../../Images/soical3.png";
import Footer from "../Includes/Footer";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import "./HomeAnimation.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

import thumbnail1 from "../../Images/thumbnail1.jpg";
import thumbnail2 from "../../Images/thumbnail2.jpg";
import thumbnail3 from "../../Images/thumbnail3.jpg";
import thumbnail4 from "../../Images/thumbnail4.jpg";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import songImg1 from "../../Images/song1.jpg";
import songImg2 from "../../Images/song2.jpg";
import songImg3 from "../../Images/song3.jpg";

import song1 from '../../music-files/1.mp3';
import song2 from '../../music-files/2.mp3';
import song3 from '../../music-files/3.mp3';
import song4 from '../../music-files/4.mp3';
import song5 from '../../music-files/5.mp3';



function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoId, setVideoId] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 45,
    minutes: 18,
    seconds: 9,
  });

  // Dynamic image states
  const images = [heroBg, heroBg2, heroBg3, heroBg4, heroBg5];
  const videos = [
    { id: 1, image: thumbnail1, link: "oyoQA1qhh0k", title: "Shukriya Hussain (A.S) | Imran Rahat" },
    { id: 2, image: thumbnail2, link: "pVtn262X5VY", title: "Mein Wo Ali Hoon | Imran Rahat" },
    { id: 3, image: thumbnail3, link: "EC1PDlRCtZ8", title: "Saadgi Toh Hamari | Imran Rahat" },
    { id: 4, image: thumbnail4, link: "uJ2X7_r_Frw", title: "Dil Galti Kar Betha | Imran Rahat" },
  ];

  // Reference
  const sliderRef = useRef(null);

  // Cycle images every 5 seconds
  useEffect(() => {
    const cycleImages = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalId = setInterval(cycleImages, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Countdown timer logic
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

  // Intersection Observer for animation
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsAnimated(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const socialIcons = document.querySelectorAll(".social-icon");
    const images = document.querySelectorAll(".piano-left, .tabla-right");

    socialIcons.forEach((icon) => observer.observe(icon));
    images.forEach((image) => observer.observe(image));
    return () => observer.disconnect();
  }, []);

  // Initialize Slick Slider
  useEffect(() => {
    const initializeSlickSlider = () => {
      $(sliderRef.current).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      });
    };

    initializeSlickSlider();
    return () => {
      $(sliderRef.current).slick("unslick");
    };
  }, []);

  // Handle video click for popup
  const handleVideoClick = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  
  const musicTracks = [
    {
      title: 'David Guetta Miami Ultra Song 1',
      url: song1, // Use imported file
      image: songImg1,
    },
    {
      title: 'David Guetta Miami Ultra Song 2',
      url: song2, // Use imported file
      image: songImg2,
    },
    {
      title: 'David Guetta Miami Ultra Song 3',
      url: song3, // Use imported file
      image: songImg3,
    },
    {
      title: 'David Guetta Miami Ultra Song 4',
      url: song4, // Use imported file
      image: songImg3,
    },
    {
      title: 'David Guetta Miami Ultra Song 5',
      url: song5, // Use imported file
      image: songImg3,
    },
  ];
  
  
  
  return (
    <>
      <Header />
      <section
        className="hero spad set-bg"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <h2 style={{color: "#fff", fontWeight: "bold"}}>Imran Rahat Ali Khan</h2>
                <h1>Qawali Feel the heart beats</h1>
                <button
                  className="play-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </button>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="2fWwpXuxrTI"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
          {/* {currentImageIndex === 0 && (
            <div className="animate-image">
              <img
                className={`piano-left ${isAnimated ? "animate" : ""}`}
                src={pianoImage}
                alt="Piano"
              />
              <img
                className={`tabla-right ${isAnimated ? "animate" : ""}`}
                src={tablaImage}
                alt="Tabla"
              />
            </div>
          )} */}
        <div className="social-icons">
          <div className="social-item">
            <img
              className={`social-icon ${isAnimated ? "animate" : ""}`}
              src={instagramIcon}
              alt="Instagram"
            />
            <span>Instagram</span>
          </div>
          <div className="social-item">
            <img
              className={`social-icon ${isAnimated ? "animate" : ""}`}
              src={spotifyIcon}
              alt="Spotify"
            />
            <span>Spotify</span>
          </div>
          <div className="social-item">
            <img
              className={`social-icon ${isAnimated ? "animate" : ""}`}
              src={youtubeIcon}
              alt="YouTube"
            />
            <span>YouTube</span>
          </div>
        </div>
        <div className="linear__icon">
          <i className="fa fa-angle-double-down"></i>
        </div>
      </section>
      
      <section className="about spad mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__pic">
                <img src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <h2>Imran Rahat Ali Khan</h2>
                  <h1>About me</h1>
                </div>
                <p>
                  DJ Rainflow knows how to move your mind, body and soul by
                  delivering tracks that stand out from the norm. As if this
                  impressive succession of high impact, floor-filling bombs
                  wasn’t enough to sustain.
                </p>
                <a href="#" className="primary-btn">
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="services__left set-bg"
                style={{ backgroundImage: `url(${serviceLeft})` }}
              >
                <a
                  href="https://youtube.com/shorts/6dnLOA2g6LI?si=QeW8GC_qDHLlpncO"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="row services__list">
                <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
                  <div className="service__item deep-bg">
                    <img src={serviceOne} alt="" />
                    <h4>Wedding</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
                  <div className="service__item">
                    <img src={serviceTwo} alt="" />
                    <h4>Clubs and bar</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
                  <div className="service__item deep-bg">
                    <img src={serviceThree} alt="" />
                    <h4>DJ lessons</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
                  <div className="service__item">
                    <img src={serviceFour} alt="" />
                    <h4>Corporate events</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section className="track spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-title">
              <h2>Latest tracks</h2>
              <h1>Music podcast</h1>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="track__all">
              <a href="#" className="primary-btn border-btn">
                View all tracks
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 p-0">
            <div className="track__content nice-scroll">
            <AudioPlayer tracks={musicTracks} />
            </div>
          </div>
          <div className="col-lg-5 p-0">
            <div className="track__pic">
              <img src={trackRight} alt="Track Image" />
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="youtube spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Youtube feed</h2>
              <h1>Latest videos</h1>
            </div>
          </div>
        </div>
        {/* Video Modal */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
        {/* Slider Container with ref */}
        <div className="youtube__slider" ref={sliderRef}>
          {videos.map((video) => (
            <div className="youtube__item" key={video.id}>
              <div
                className="youtube__item__pic set-bg"
                style={{ backgroundImage: `url(${video.image})` }}
              >
                <button
                  className="play-btn video-popup"
                  onClick={() => handleVideoClick(video.link)}
                >
                  <i className="fa fa-play"></i>
                </button>
              </div>
              <div className="youtube__item__text">
                <h4>{video.title}</h4>
              </div>
            </div>
          ))}
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
      <Footer />
    </>
  );
}

export default Home;
