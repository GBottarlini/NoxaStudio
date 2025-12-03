# NOXA Studio Landing Page

<div align="center">
  <img src="src/assets/logo.svg" alt="NOXA Studio Logo" width="150" />
  <h1>New Order eXperience Agency</h1>
  <p>Landing responsiva, diseno editorial y foco en velocidad para web + Instagram + branding.</p>
</div>

<div align="center">

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![License](https://img.shields.io/badge/License-Private-red.svg?style=for-the-badge)](./LICENSE)

</div>

---

## 📋 Índice

- [✨ Objetivo del Proyecto](#-objetivo-del-proyecto)
- [🚀 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🛠️ Puesta en Marcha](#️-puesta-en-marcha)
- [📦 Estructura del Proyecto](#-estructura-del-proyecto)
- [🧩 Secciones del Sitio](#-secciones-del-sitio)
- [📬 Contacto](#-contacto)
- [🔒 Licencia](#-licencia)

## ✨ Objetivo del Proyecto

Crear una web elegante, funcional y ordenada que represente el enfoque minimalista y moderno de **NOXA Studio**, priorizando:

- **Claridad:** Mensajes directos y una navegación intuitiva.
- **Performance:** Tiempos de carga rápidos para una experiencia de usuario óptima.
- **Estética Limpia:** Diseño minimalista y editorial.
- **Estructura Ordenada:** Código mantenible y fácil de entender.
- **Escalabilidad:** Preparado para añadir futuros servicios y funcionalidades.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías modernas para asegurar un desarrollo ágil y un producto final de alta calidad.

- **React 18:** Para una interfaz de usuario declarativa y eficiente.
- **Vite:** Build tool ultra-rápida para un desarrollo local instantáneo.
- **Hook** `useIntersectionObserver` para animaciones on-scroll
- **CSS Modular:** Estilos encapsulados por componente para evitar colisiones y mejorar la mantenibilidad.
- **Arquitectura Limpia:** Basada en componentes reutilizables y secciones bien definidas.

## 🛠️ Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu entorno local.

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/noxa-landing.git
    cd noxa-landing
    ```

2.  **Instala las dependencias**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) para verlo en tu navegador.

4.  **Build de producción**
    Para crear una versión optimizada para producción:
    ```bash
    npm run build
    ```

## 📦 Estructura del Proyecto

<details>
<summary>Haz clic para ver la estructura de carpetas</summary>

```
src/
  assets/          # logos, imagenes, decoraciones
  components/      # piezas reutilizables (NavBar, Footer)
  hooks/           # hooks personalizados (intersection observer)
  sections/        # secciones principales (Hero, About, Packs, etc.)
  styles/          # CSS por seccion, base y animaciones
  App.jsx          # ensambla las secciones
  main.jsx         # punto de entrada y estilos globales
index.html
```
</details>

## 🧩 Secciones del Sitio
- Hero: propuesta renovada con panel de valor, badges y CTA
- About: pilares del estudio y enfoque minimalista
- Servicios y Packs: ofertas, tarifas y entregables
- Proceso: pasos y tiempos
- Portfolio: trabajos destacados
- FAQ: respuestas rapidas
- Contacto: formulario escalonado con animaciones y datos directos
- Footer: enlaces y redes

## 📬 Contacto

**NOXA Studio** - *New Order eXperience Agency*

- **Instagram:** [@noxa.studio](https://www.instagram.com/noxa.studio/)
- **Email:** `contacto@noxa.studio` (ejemplo)

## 🔒 Licencia

Este proyecto es de carácter privado y es propiedad de **NOXA Studio**.
La redistribución y el uso no autorizado están estrictamente prohibidos.