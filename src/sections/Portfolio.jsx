import "../styles/portfolio.css";

const projects = [
  {
    tag: "Web",
    name: "Estudio jurídico — Landing minimal",
    type: "Web institucional",
    year: "2024",
  },
  {
    tag: "Web + IG",
    name: "Consultora contable — Presencia completa",
    type: "Web + Instagram",
    year: "2024",
  },
  {
    tag: "Instagram",
    name: "Tienda de ropa — Rebrand visual",
    type: "Instagram optimization",
    year: "2024",
  },
  {
    tag: "Branding",
    name: "Marca personal — Identidad mínima",
    type: "Branding Lite",
    year: "2023",
  },
  {
    tag: "Web",
    name: "Negocio de servicios — Landing clara",
    type: "Landing Essential",
    year: "2023",
  },
  {
    tag: "Exploración",
    name: "Exploraciones de layouts y UI",
    type: "Concept & UI exploration",
    year: "2023",
  },
];

export default function Portfolio() {
  return (
    <section className="section section-portfolio" id="portfolio">
      <div className="noxa-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2>Trabajo y exploraciones visuales.</h2>
          <p className="section-sub">
            Proyectos reales y exploraciones de diseño que representan el tipo
            de resultado visual que buscamos en NOXA Studio.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.name} className="card portfolio-card">
              <div className="portfolio-mockup" />

              <div className="portfolio-meta">
                <div className="portfolio-line">
                  <span className="portfolio-tag">{project.tag}</span>
                  <span className="portfolio-year">{project.year}</span>
                </div>

                <h3 className="portfolio-title">{project.name}</h3>
                <p className="portfolio-type">{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
