import React from "react";
import "./App.css";

function Catedral() {
  return (
    <div className="App">
      <h1>Proyecto - Arquitectura De computadores y Ensambladores 2 - Grupo 2 </h1>
      <h2>Catedral</h2>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#006400",
    color: "white",
    padding: "1rem",
    textAlign: "center"
  },
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
  },
  main: {
    padding: "2rem",
    textAlign: "center"
  },
  image: {
    width: "80%",
    maxWidth: "800px",
    marginTop: "1rem"
  },
  mapContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: "#006400",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem"
  }
};

export default Catedral;
