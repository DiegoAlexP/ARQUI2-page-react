import React from "react";

function HomePage() {
  return (
    <div className="App" style={styles.body}>
      <header style={styles.header}>
        <h1>Proyecto - Arquitectura De Computadores y Ensambladores 2 - Grupo 2</h1>
        <p>
          Sistema Inteligente de Seguridad y Gestión de Tráfico Urbano: <br />
          Cimentación y Monitoreo Local
        </p>
      </header>



      <main style={styles.main}>
        <h2 style={styles.subtitulo}>Bienvenido</h2>
        <p>
          Esta es una guía interactiva sobre la Zona 1, conocida por su riqueza histórica,
          arquitectura colonial, plazas icónicas y cultura viva. Usa los enlaces de arriba
          para explorar sobre la Catedral y el Palacio Nacional.
        </p>

        <h3 style={{ marginTop: "2rem", color: "#2a2a2a" }}>Ubicación en el mapa</h3>
        <div style={styles.mapContainer}>
          <iframe
            title="Mapa Zona 1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15441.434306902782!2d-90.5178125403148!3d14.635575535217331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a214c43783af%3A0x371e92e045aa2638!2sZona%201%2C%20Cdad.%20de%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1754373635648!5m2!1ses-419!2sgt"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <footer style={styles.footer}>
        &copy; 2025 Proyecto ARQUI 2 | Desarrollado por Grupo 2 | Zona 1 Guatemala 🇬🇹
      </footer>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    backgroundColor: "#4997D0", // Celeste bandera
    color: "white",
    padding: "1.5rem",
    textAlign: "center"
  },
  nav: {
    backgroundColor: "#ffffff",
    padding: "1rem",
    textAlign: "center",
    borderBottom: "2px solid #4997D0"
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#4997D0",
    fontWeight: "bold",
    fontSize: "16px"
  },
  main: {
    padding: "2rem",
    textAlign: "center",
    color: "#333"
  },
  subtitulo: {
    color: "#005bac"
  },
  mapContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  footer: {
    backgroundColor: "#4997D0",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem"
  }
};

export default HomePage;
