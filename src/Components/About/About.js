import React from "react";
import Header2 from "../Includes/Header2";
import skillVideo from "../../Images/skill-video.jpg";
import aboutImage from "../../Images/about.jpg";
import apOne from "../../Images/ap-1.jpg";
import apTwo from "../../Images/ap-2.jpg";
import apThree from "../../Images/ap-3.jpg";
import apFour from "../../Images/ap-4.jpg";
import apFive from "../../Images/ap-5.jpg";
import apSix from "../../Images/ap-6.jpg";
import apSeven from "../../Images/ap-7.jpg";
import asIcon1 from "../../Images/as-icon-1.png";
import asIcon2 from "../../Images/as-icon-2.png";
import asIcon3 from "../../Images/as-icon-3.png";
import as1 from "../../Images/as-1.jpg";
import as2 from "../../Images/as-2.jpg";
import as3 from "../../Images/as-3.jpg";
import Footer from "../Includes/Footer";

function About() {
  return (
    <>
      <Header2 />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="#">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="skills spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="skills__content">
                <div className="section-title">
                  <h2>DJ Alexandra Rud</h2>
                  <h1>DJ’s skill</h1>
                </div>
                <p>
                  DJ Rainflow knows how to move your mind, body and soul by
                  delivering tracks that stand out from the norm.
                </p>
                <div className="skill__bar__item">
                  <p>Perform</p>
                  <div id="bar1" className="barfiller">
                    <span className="tip"></span>
                    <span className="fill" data-percentage="95"></span>
                  </div>
                </div>
                <div className="skill__bar__item">
                  <p>Use Midi</p>
                  <div id="bar2" className="barfiller">
                    <span className="tip"></span>
                    <span className="fill" data-percentage="85"></span>
                  </div>
                </div>
                <div className="skill__bar__item">
                  <p>Remix and mash up</p>
                  <div id="bar3" className="barfiller">
                    <span className="tip"></span>
                    <span className="fill" data-percentage="98"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div
                className="skills__video set-bg"
                style={{ backgroundImage: `url(${skillVideo})` }}
              >
                <a
                  href="https://www.youtube.com/watch?v=S19UcWdOA-I?autoplay=1"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about about--page spad">
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
                  <h2>He heard something that he knew to be music</h2>
                </div>
                <p>
                  At vero eos et accusamus et iusto odi odgnissimos ducimus qui
                  blanditiis praesentium volup tatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi quod justo pro an.
                </p>
                <img src="img/about/signature.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-pic">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src={apOne} alt="" />
                  <img src={apTwo} alt="" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src={apThree} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src={apFour} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src={apFive} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 p-0">
                  <img src={apSix} alt="" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 p-0">
                  <img src={apSeven} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <h2>WHERE DO I PLAY</h2>
                <h1>Best service</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about__services__item">
                <div
                  className="about__services__item__pic set-bg"
                  style={{ backgroundImage: `url(${as1})` }}
                >
                  <div className="icon">
                    <img src={asIcon1} alt="" />
                  </div>
                </div>
                <div className="about__services__item__text">
                  <h4>Wedding</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about__services__item">
                <div
                  className="about__services__item__pic set-bg"
                  style={{ backgroundImage: `url(${as2})` }}
                >
                  <div className="icon">
                    <img src={asIcon2} alt="" />
                  </div>
                </div>
                <div className="about__services__item__text">
                  <h4>Clubs and bar</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about__services__item">
                <div
                  className="about__services__item__pic set-bg"
                  style={{ backgroundImage: `url(${as3})` }}
                >
                  <div className="icon">
                    <img src={asIcon3} alt="" />
                  </div>
                </div>
                <div className="about__services__item__text">
                  <h4>Corporate events</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default About;
