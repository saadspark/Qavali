import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
return (
<div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
  </BrowserRouter>
</div>
);
}

export default App;