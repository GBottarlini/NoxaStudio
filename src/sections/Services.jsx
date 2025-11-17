import "../styles/services.css";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="noxa-container">
        <div className="section-header">
          <span className="section-tag">Servicios</span>
          <h2>Lo que hacemos en NOXA Studio</h2>
          <p className="section-sub">
            Web como base, Instagram para presencia diaria e identidad visual
            para que todo se vea parte de la misma marca.
          </p>
        </div>

        <div className="services-layout">
          {/* CARD DESTACADA */}
          <article className="card service-card service-featured">
            <div className="service-top">
              <span className="service-label">Core</span>
              <span className="service-kicker">Web Design &amp; Development</span>
            </div>

            <h3 className="service-title">Sitios web minimalistas y profesionales.</h3>

            <p className="service-text">
              Tu sitio es tu base. Diseñamos y desarrollamos webs limpias,
              rápidas y claras para que se entienda quién sos, qué hacés y cómo
              contactarte.
            </p>

            <ul className="service-list">
              <li>Landing pages y webs institucionales.</li>
              <li>Mobile first, performance y claridad.</li>
              <li>Integraciones simples y formularios.</li>
            </ul>
          </article>

          {/* COLUMNA DERECHA: 2 CARDS */}
          <div className="service-column">
            <article className="card service-card">
              <div className="service-top">
                <span className="service-label">Instagram</span>
              </div>
              <h3 className="service-title">Instagram Optimization</h3>
              <p className="service-text">
                Rediseñamos tu perfil para que se vea prolijo, coherente y
                alineado a tu marca, sin perder tu estilo.
              </p>
              <ul className="service-list">
                <li>Feed ordenado y consistente.</li>
                <li>Plantillas para posts y stories.</li>
                <li>Bio, highlights e imagen de perfil alineadas.</li>
              </ul>
            </article>

            <article className="card service-card">
              <div className="service-top">
                <span className="service-label">Identidad</span>
              </div>
              <h3 className="service-title">Branding Lite</h3>
              <p className="service-text">
                Logo, paleta y tipografías mínimas para que todo lo que hagas
                se sienta parte de la misma marca.
              </p>
              <ul className="service-list">
                <li>Logo principal y variantes básicas.</li>
                <li>Paleta y tipografías definidas.</li>
                <li>Piezas iniciales listas para usar.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
