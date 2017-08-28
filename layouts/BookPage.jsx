import React from "react";

import {
  Disqus,
  Buy,
  LatestPost,
  Meta,
  PrevNext,
  PrevNextMini,
  Resources,
  SocialLinks,
  Toc
} from "@survivejs/components";

const BookPage = ({
  page: {
    file: {
      attributes: {
        endSource,
        demo,
        headerExtra,
        headerImage,
        title,
        resources
      },
      body
    },
    previous,
    next,
    type
  },
  section
}) =>
  <div className="chapter__wrapper">
    {headerImage &&
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImage})`
        }}
      />}

    <h1 className="post__heading">
      {title}
    </h1>

    {headerExtra &&
      <div
        className="header-extra"
        dangerouslySetInnerHTML={{ __html: headerExtra }}
      />}

    <div className="toc-nav__wrapper">
      <h4 className="search-nav--header">Search</h4>

      <input id="search" />

      <h4 className="toc-nav--header">Índice</h4>

      <Toc sectionPages={section.pages} title={title} />

      <Resources resources={resources} />

      <Buy sectionName={section.name} />
    </div>

    <div className="chapter">
      <div className="post__content">
        <LatestPost section={section} />

        <Meta demo={demo} endSource={endSource} />

        <div
          className="chapter-content"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <SocialLinks type={type} />

        <PrevNext
          previous={previous}
          next={next}
          previousText="Capítulo anterior"
          nextText="Pŕoximo capítulo"
          getTitle={page => page.file.attributes.title}
        />

        <blockquote className="tip">
          {section.name === "webpack"
            ? <p>
                Puedes encontrar este libro en{" "}
                <a href="https://leanpub.com/survivejs-webpack">
                  Leanpub (digital)
                </a>,{" "}
                <a href="https://www.amazon.com/dp/9526868803">
                  Amazon (papel)
                </a>, and{" "}
                <a href="https://www.amazon.com/dp/B06XWZZGBS">
                  Kindle (digital)
                </a>. Comprando este libro permitirás el desarrollo de
                más contenido. Una parte de los beneficios (~30%) van para Tobias Koppers,
                el autor de webpack.
              </p>
            : <p>
                Puedes encontrar este libro en{" "}
                <a href="https://leanpub.com/survivejs-react">
                  Leanpub
                </a>. Comprando este libro permitirás el desarrollo de
                más contenido.
              </p>}
        </blockquote>

        <div id="disqus_thread" />
      </div>
    </div>

    <PrevNextMini
      previous={previous}
      next={next}
      getTitle={page => page.file.attributes.title}
    />

    <Disqus shortname="survivejs" />
  </div>;

export default BookPage;
