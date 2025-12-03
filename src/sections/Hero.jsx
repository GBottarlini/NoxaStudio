import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" aria-hidden="true" />

      <div className="noxa-container hero-inner">
        <div className="hero-copy fade-in-up">
          <span className="section-tag hero-kicker">
            Estudio digital / web + redes
          </span>

          <h1 className="hero-title">
            Webs limpias y contenido que se siente como marca.
          </h1>

          <p className="hero-sub">NOXA Studio — New Order Experience Agency</p>

          <p className="hero-body">
            Creamos sitios rápidos, editables y coherentes con tu identidad.
            También ordenamos tu Instagram para que cada pieza se vea parte del
            mismo sistema.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Armar mi proyecto
            </a>
            <a href="#packs" className="btn btn-secondary">
              Ver packs y tarifas
            </a>
          </div>

          <div className="hero-badges">
            <span className="pill">Landing</span>
            <span className="pill">Sitio completo</span>
            <span className="pill">Brand kit</span>
            <span className="pill">Instagram</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <div className="hero-card-head">
              <span className="hero-chip">Entrega dirigida</span>
              <span className="hero-dot" />
            </div>
            <h3>Diseño editorial + dev rápido</h3>
            <p className="hero-card-text">
              Definimos estructura, diseñamos en alta fidelidad y dejamos todo
              listo para publicar: web, piezas de IG y assets de marca.
            </p>
            <div className="hero-checks">
              <span>Kickoff en 72h</span>
              <span>Mobile first</span>
              <span>Guía visual simple</span>
            </div>
          </div>

          <div className="hero-metrics">
            <div>
              <p className="metric-label">Implementación</p>
              <p className="metric-value">1-2 semanas</p>
              <p className="metric-note">según pack</p>
            </div>
            <div>
              <p className="metric-label">Stack</p>
              <p className="metric-value">Figma · Web</p>
              <p className="metric-note">+ Instagram</p>
            </div>
            <div>
              <p className="metric-label">Soporte</p>
              <p className="metric-value">handoff guiado</p>
              <p className="metric-note">assets listos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
