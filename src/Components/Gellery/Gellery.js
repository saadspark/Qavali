import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Modal from "react-modal"; // Import Modal component
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gellery.css';
import gelleryImg1 from "../../Images/gellery/gellery1.jpeg";
import gelleryImg2 from "../../Images/gellery/gellery2.jpeg";
import gelleryImg3 from "../../Images/gellery/gellery3.jpeg";
import gelleryImg4 from "../../Images/gellery/gellery4.jpeg";
import gelleryImg5 from "../../Images/gellery/gellery5.jpeg";
import gelleryImg6 from "../../Images/gellery/gellery6.jpeg";
import gelleryImg7 from "../../Images/gellery/gellery7.jpeg";
import gelleryImg8 from "../../Images/gellery/gellery8.jpeg";
import gelleryImg9 from "../../Images/gellery/gellery9.jpeg";
import gelleryImg10 from "../../Images/gellery/gellery10.jpeg";

export default function Gellery() {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal
  const [currentImg, setCurrentImg] = useState(null); // State to store current image

  const openModal = (imgSrc) => {
    setCurrentImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const images = [
    gelleryImg1, gelleryImg2, gelleryImg3, gelleryImg4, gelleryImg5,
    gelleryImg6, gelleryImg7, gelleryImg8, gelleryImg9, gelleryImg10
  ];

  return (
    <div className="custom-slider-container">
     <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1, // For small screens
          },
          640: {
            slidesPerView: 2, // For medium screens
          },
          1024: {
            slidesPerView: 3, // For large screens
          }
        }}
        className="custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} onClick={() => openModal(img)}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal 
        isOpen={isOpen} 
        onRequestClose={closeModal} 
        className="modal-content" 
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="modal-close-button">✖</button>
        {currentImg && <img src={currentImg} alt="Full View" className="modal-image" />}
      </Modal>
    </div>
  );
}
