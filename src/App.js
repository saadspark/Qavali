import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Videos from './Components/Videos/Videos';
import Events from './Components/Events/Events';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
return (
<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/youtube-feed" element={<Videos />} />
      <Route path="/view-events" element={<Events />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
</div>
);
}

export default App;