import React from 'react';
import './Header.css'; // Assurez-vous d'avoir un fichier CSS pour les styles
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez Link, BrowserRouter, Routes et Route
import Forum from './Forum'; // Importez le composant Forum
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Activites from './components/Activites';
import Connaitre from './components/Connaitre';
import Adherer from './components/Adherer';
import Promouvoir from "./components/Promouvoir";
import Apprendre from "./components/Apprendre";
import Enseigner from "./components/Enseigner";
import Divers from './components/Divers';

const Header = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Activites" element={<Activites />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Connaitre" element={<Connaitre />} />
          <Route path="/Adherer" element={<Adherer />} />
          <Route path="/Promouvoir" element={<Promouvoir />} />
          <Route path="/Apprendre" element={<Apprendre />} />
          <Route path="/Enseigner" element={<Enseigner />} />
          <Route path="/Divers" element={<Divers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
