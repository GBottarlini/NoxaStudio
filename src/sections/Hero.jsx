import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="noxa-container hero-inner">
        <div className="hero-content fade-in-up">
          <span className="hero-tag">Estudio digital minimalista</span>

          <h1 className="hero-title">
            Diseño y desarrollo
            <br />
            <span>web minimalista</span>
          </h1>

          <p className="hero-sub">
            NOXA Studio · New Order eXperience Agency
          </p>

          <p className="hero-body">
            Creamos sitios web limpios, rápidos y coherentes con tu marca.
            También ordenamos y profesionalizamos tu Instagram para que tu
            presencia digital se vea tan bien como lo que ofrecés.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Quiero mi sitio web
            </a>
            <a href="#packs" className="btn btn-secondary">
              Ver packs y servicios
            </a>
          </div>

          <p className="hero-note">
            Ideal para emprendedores, marcas personales y negocios de servicios.
          </p>
        </div>
      </div>
    </section>
  );
}
