import './App.css';
import About from './pages/about.js';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Shop from './pages/shop.js';
import Navbar from './pages/navbar.js';
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about.js" element={<About />} />
          <Route path="/shop.js" element={<Shop />} />
          <Route path="/contact.js" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
