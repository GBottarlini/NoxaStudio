import "../styles/services.css";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";
import CodeIcon from "./CodeIcon.jsx";
import PlusIcon from "./PlusIcon.jsx";
import TargetIcon from "./TargetIcon.jsx";

const servicesData = [
  {
    icon: <CodeIcon />,
    title: "Desarrollo Web",
    description:
      "Landing pages o sitios completos diseñados con estructura clara, SEO on-page y performance rápida.",
    link: "#contact",
  },
  {
    icon: <PlusIcon />,
    title: "Gestión de Redes",
    description:
      "Sistema de contenido para Instagram: calendario, copys, plantillas y comunidad con criterio de marca.",
    link: "#contact",
  },
  {
    icon: <TargetIcon />,
    title: "Branding y Diseño",
    description:
      "Identidad flexible: logo, paleta, tipografías y guías de uso para que todo se vea consistente.",
    link: "#contact",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="noxa-container">
        <div
          className={`section-header animate-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-tag">Servicios</span>
          <h2>Lo que hacemos_</h2>
          <p className="section-sub">
            Unimos web, Instagram e identidad para que tu presencia digital sea
            coherente de punta a punta.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article
              key={service.title}
              className={`service-card animate-on-scroll ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-cta">
                  Hablemos <span>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
