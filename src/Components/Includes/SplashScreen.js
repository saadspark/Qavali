
import React, { useEffect, useState } from 'react';
import './SplashScreen.css'; 

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading && (
        <div className="splash-screen">
          <img src="./assets/img/logo.png" alt="Logo" className="splash-logo" /> 
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
