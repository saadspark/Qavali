import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Modal, Button } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import thumbnail5 from "../../Images/thumbnail5.jpg";
import thumbnail6 from "../../Images/thumbnail6.jpg";
import thumbnail7 from "../../Images/thumbnail7.jpg";
import thumbnail8 from "../../Images/thumbnail8.jpg";
import thumbnail9 from "../../Images/thumbnail9.jpg";
import thumbnail10 from "../../Images/thumbnail10.jpg";
import thumbnail11 from "../../Images/thumbnail11.jpg";
import thumbnail12 from "../../Images/thumbnail12.jpg";
import thumbnail13 from "../../Images/thumbnail13.jpg";
import thumbnail14 from "../../Images/thumbnail14.jpg";
import thumbnail15 from "../../Images/thumbnail15.jpg";
import thumbnail16 from "../../Images/thumbnail16.jpg";
import thumbnail17 from "../../Images/thumbnail17.jpg"; 
import './Videos.css'

const videos = [
    {
      id: 1,
      image: thumbnail6,
      duration: "00:56:51",
      date: "08/23/2024",
      videoLink: "https://youtu.be/YvizbfNwHn0?si=d9bpWT68g0uXcUb4",
      title:
        "Dhanak Episode 66 | Doctor Nabiha, imran Rahat Ali Khan, Nargis Baig, Rubi Shahzad, Nazish | Aplus",
    },
    {
      id: 2,
      image: thumbnail7,
      duration: "00:01:11",
      date: "08/23/2012",
      videoLink: "https://www.youtube.com/watch?v=N98-CVo-vMc",
      title: "Faryad Ali & Imran Ali Qawwals Live at London Mela 2012",
    },
    {
      id: 3,
      image: thumbnail8,
      duration: "00:08:14",
      date: "10/14/2021",
      videoLink: "https://www.youtube.com/watch?v=mRWuZ2qrWIM",
      title:
        "Tumhen Dillagi - Imran Rahat Ali Khan - UK Performance - Best Qawali 2021",
    },
    {
      id: 4,
      image: thumbnail9,
      duration: "00:06:50",
      date: "9/13/2024",
      videoLink: "https://youtu.be/lx6dMwq8qjk?si=nZ4_tW0OUzNrE5sA",
      title: "Kamli Wale Muhammad | IMRAN RAHAT ALI KHAN | New Qawwali Naat 2024",
    },
    {
      id: 5,
      image: thumbnail10,
      duration: "00:08:12",
      date: "05/20/2021",
      videoLink: "https://www.youtube.com/watch?v=NPNc1dPqSOY",
      title:
        "Ya Nabi Salam O Alaika | Imran Ali Rahat | 3 Salam AkSath | RabiulAwal Naat 2022",
    },
    {
      id: 6,
      image: thumbnail11,
      duration: "00:05:57",
      date: "02/25/2024",
      videoLink: "https://youtu.be/oyoQA1qhh0k?si=CuS-38R3kkawUQUa",
      title: "SHUKRIA HUSSAIN (A.S) | IMRAN RAHAT ALI KHAN | New Qasida 2024",
    },
  ];
  const videos1 = [
    {
      id: 7,
      image: thumbnail12,
      duration: "00:21:08",
      date: "12/16/2018",
      videoLink: "https://www.youtube.com/watch?v=mfv79xgXF0A",
      title: "Zindagi Ka Bharosa Nahi hai zikre haider qawwal Imran Ali Khan qawwali",
    },
    {
      id: 8,
      image: thumbnail13,
      duration: "00:30:23",
      date: "02/07/2019",
      videoLink: "https://www.youtube.com/watch?v=QFBhknfZxl0",
      title: "Mera moo Adab nal jhuk janda by imran Ali Faryad Ali salana urs mubarak Rahim Yar Khan",
    },
    {
        id: 9,
        image: thumbnail14,
        duration: "00:15:22",
        date: "06/08/2018",
        videoLink: "https://www.youtube.com/watch?v=Qfi2JU2P1tQ",
        title: "BATHA MARA YAR SAMNAY IMRAN ALI FARYAD ALI AAWWAL",
      },
      {
        id: 10,
        image: thumbnail15,
        duration: "00:10:08",
        date: "10/04/2021",
        videoLink: "https://www.youtube.com/watch?v=AiLGHCVlP5o",
        title: "BYe Jo Halka Halka Saroor He - Imran Ali Qawal - Tribute of Ustad Nusrat Fateh Ali Khan - Gazal",
      },
      {
        id: 11,
        image: thumbnail16,
        duration: "00:02:16",
        date: "10/09/2021",
        videoLink: "https://www.youtube.com/watch?v=JF5vxRrcfw4",
        title: "Sazina - Tu kuja Man Kuja - Imran Ali Rahat Khan Qawal - Marriage Event 2021 - Best Harmonium",
      },
      {
        id: 12,
        image: thumbnail17,
        duration: "00:09:49",
        date: "04/06/2023",
        videoLink: "https://www.youtube.com/watch?v=LhUbK_htgOU",
        title: "Imran Rahat Ali Khan Qawal | Khari Sharif Urs E Mubarak 2023 | Superb Qawali Program",
      },
  ];

const VideoSlider = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (videoLink) => {
    setCurrentVideo(videoLink);
    setShow(true);
  };

  const [show, setShow] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 items

  // Function to update itemsToShow based on window width
  const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(2); // Show 2 items on small screens
    } else {
      setItemsToShow(4); // Show 4 items on larger screens
    }
  };

  useEffect(() => {
    // Initial check
    updateItemsToShow();
    // Update itemsToShow on resize
    window.addEventListener('resize', updateItemsToShow);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);
  return (
    <>
      <section class="videos spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div>
                <div
                  className="videos__large__item set-bg"
                  style={{ backgroundImage: `url(${thumbnail5})` }}
                >
                  {/* Play button triggers the modal popup */}
                  <a
                    href="#"
                    className="play-btn video-popup"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <div className="videos__large__item__text">
                    <h4>
                      Be Khud Kiye Daity Hain - Imran Rahat Ali Khan Qawwal
                    </h4>
                    <ul>
                      <li>00:06:21</li>
                      <li>10/31/2020</li>
                    </ul>
                  </div>
                </div>

                {/* Video Popup using ModalVideo */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="bWbennkNK6w"
                  onClose={() => setOpen(false)}
                />
              </div>

              <div className="row">
                <OwlCarousel
                  className="videos__slider owl-carousel"
                  items={4}
                  margin={30}
                  nav
                  dots
                  autoplay
                  autoplayTimeout={3000}
                  autoplayHoverPause={true}
                  loop
                >
                  {videos.map((video) => (
                    <div className="col-lg-3" key={video.id}>
                      <div className="videos__item">
                        <div
                          className="videos__item__pic set-bg"
                          style={{ backgroundImage: `url(${video.image})` }}
                        >
                          <Button
                            onClick={() => handleShow(video.videoLink)}
                            className="play-btn"
                            variant="link"
                          >
                            <i className="fa fa-play"></i>
                          </Button>
                        </div>
                        <div className="videos__item__text">
                          <h5>{video.title}</h5>
                          <ul>
                            <li>{video.duration}</li>
                            <li>{video.date}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>

                {/* Modal for showing video */}
                <Modal show={show} onHide={handleClose} centered size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Watch Video</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {currentVideo && (
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          className="embed-responsive-item"
                          src={currentVideo.replace("watch?v=", "embed/")}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title="YouTube video"
                        ></iframe>
                      </div>
                    )}
                  </Modal.Body>
                </Modal>
              </div>
              <div className="row">
      <OwlCarousel
        className="videos__slider owl-carousel"
        items={itemsToShow} // Use the dynamic value here
        margin={30}
        nav
        dots
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        loop
      >
        {videos1.map((video1) => (
          <div className="col-lg-3" key={video1.id}>
            <div className="videos__item1">
              <div
                className="videos__item__pic set-bg"
                style={{ backgroundImage: `url(${video1.image})` }}
              >
                <Button
                  onClick={() => handleShow(video1.videoLink)}
                  className="play-btn"
                  variant="link"
                >
                  <i className="fa fa-play"></i>
                </Button>
              </div>
              <div className="videos__item__text">
                <h5>{video1.title}</h5>
                <ul>
                  <li>{video1.duration}</li>
                  <li>{video1.date}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>

      {/* Modal for showing video */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVideo && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={currentVideo.replace("watch?v=", "embed/")}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSlider;
