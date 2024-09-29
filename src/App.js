import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Videos from './Components/Videos/Videos';
import Events from './Components/Events/Events';
import BackToTopButton from './Components/Includes/BackToTopButton ';
import SplashScreen from './Components/Includes/SplashScreen';

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment the routes when you're ready to use them */}
          {/* <Route path="/about-us" element={<About />} />
          <Route path="/youtube-feed" element={<Videos />} />
          <Route path="/view-events" element={<Events />} /> */}
        </Routes>
        <BackToTopButton/> {/* Include the button here */}
      </BrowserRouter>
    </div>
  );
}

export default App;
