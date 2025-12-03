import "../styles/nav.css";

export default function NavBar() {
  return (
    <header className="noxa-nav">
      <div className="noxa-container">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <img
              src="/logoNoxa.png"
              alt="Noxa Studio logo"
              className="nav-logo-img"
            />
          </a>

          <nav className="nav-links">
            <a href="#services">Servicios</a>
            <a href="#packs">Packs</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contacto</a>
            <a href="#contact" className="nav-cta">
              Iniciar proyecto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
