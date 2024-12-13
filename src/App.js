
import './App.css';
import About from './pages/about.js';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Shop from './pages/shop.js';
import Navbar from './pages/navbar.js';
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  
  return (
    <>
    <Navbar />
    <Home/>
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
