import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } 
from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Login from './components/Login.js';
import QuienesSomos from './components/QuienesSomos.js';
import Home from './components/Home.js';
import JugadoresFavoritos from './components/JugadoresFavoritos.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
    <Router>
      <Menu />
    
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/jugadores-favoritos" element={<JugadoresFavoritos />} />
      </Routes>
    </Router>  

      <Footer />
    </div>
  );
}

export default App;
