import React from "react";

import {
  GitterChat,
  Feedback,
  Footer,
  Navigation
} from "@survivejs/components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

const navigationPages = sectionName => [
  {
    title: "Home",
    url: "/"
  },
  {
    title: sectionName === "blog" ? "Leer el libro de webpack" : "Leer el blog",
    url: sectionName === "blog" ? "/webpack/foreword/" : "/blog/"
  },
  {
    title: "Formación",
    url: "/training/"
  },
  {
    title: "Compra el ebook",
    url:
      sectionName === "webpack"
        ? "https://leanpub.com/survivejs-webpack"
        : "https://leanpub.com/survivejs-react"
  },
  {
    title: "",
    url: ""
  },
  {
    title: "@survivejs",
    url: "https://twitter.com/survivejs"
  }
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <div>
    {children}

    {pathname !== "/" && <Navigation pages={navigationPages(section.name)} />}
    {pathname !== "/" && <Feedback sectionName={section.name} />}

    <Footer section={section} />

    <GitterChat sectionName={section.name} />
  </div>
);

export default SiteBody;
