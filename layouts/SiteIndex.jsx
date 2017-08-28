import React from "react";
import { LatestPost, SocialLinks } from "@survivejs/components";

const SiteIndex = ({ section }) =>
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-heading-content-wrapper">
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">Survive</span>
            <span className="second">JS</span>
          </div>

          <h1 className="front-header">Aprende React</h1>
          <h3 className="front-motto">
            SurviveJS te convierte de aprendiz a maestro
          </h3>

          <div className="front-button-wrapper">
            <a
              className="btn btn--buy-main"
              href="https://leanpub.com/survivejs-react-es"
            >
              Conviértete en un maestro de React
            </a>
          </div>

          <div className="front-button-wrapper">
            <span className="read-free">
              <a href="/react/introduction/">
                Lee la versión gratuita del libro de React
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="post post--front">
      <section className="post__content">
        <LatestPost section={section} />
        <div dangerouslySetInnerHTML={{ __html: require("./index.md").body }} />

        <SocialLinks />

        <LatestPost section={section} />
      </section>
    </div>
  </div>;
SiteIndex.description =
  "¿Quieres aprender React? Comienza gratis y construye un tablero de Kanban siguiendo el proyecto de ejemplo.";

export default SiteIndex;
