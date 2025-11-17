import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="noxa-footer">
      <div className="noxa-container footer-inner">
        <div className="footer-left">
          <p className="footer-brand">© NOXA Studio · New Order eXperience Agency</p>
        </div>

        <div className="footer-right">
          <a href="#top">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#packs">Packs</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
