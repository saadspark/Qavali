// Components/BackToTopButton.js
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import FontAwesome arrow icon

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          style={styles.button}
        >
          <FaArrowUp style={styles.icon} /> {/* Arrow icon */}
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '70px',
    right: '43px',
    backgroundColor: '#e5b852', // Improved background color
    border: 'none',
    borderRadius: '50%', // Circular button for the icon
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for a clean look
    cursor: 'pointer',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  },
  icon: {
    color: '#fff', // White icon for contrast
    fontSize: '20px', // Size of the arrow icon
  },
  buttonHover: {
    backgroundColor: '#d4a632', // Slightly darker color on hover
  },
};

export default BackToTopButton;
