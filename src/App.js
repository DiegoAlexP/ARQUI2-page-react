import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./Home";
import Palacio from "./palacio";
import Catedral from "./catedral";

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Inicio</Link>
          <Link to="/palacio" style={styles.link}>Palacio Nacional de la Cultura</Link>
          <Link to="/catedral" style={styles.link}>Catedral Metropolitana</Link>
        </nav>

  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palacio" element={<Palacio />} />
          <Route path="/catedral" element={<Catedral />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: "#ddd",
    padding: "1rem",
    textAlign: "center"
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  }
};

export default App;
