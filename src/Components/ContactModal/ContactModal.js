import React, { useState } from 'react';
import aboutImage from "../../Images/about.jpg";
import './ContactModal.css'

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <section id="about-section" className="about spad mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__pic">
                <img src={aboutImage} alt="Imran Rahat Ali Khan" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <h2>Imran Rahat Ali Khan</h2>
                  <h1>About Me</h1>
                </div>
                <p>
                  Imran Rahat Ali Khan is a renowned Qawali artist who knows how to mesmerize audiences
                  with soulful performances. With years of experience, he delivers music that transcends 
                  borders and touches the heart.
                </p>
                <button onClick={handleShow} className="primary-btn">
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Contact Info */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Information</h5>
                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="contact-modal-body">
                <p><strong>Phone:</strong><br/> +92 300 6017604</p>
                <p><strong>Email:</strong><br/> imranaliqawwalofficial@gmail.com</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
