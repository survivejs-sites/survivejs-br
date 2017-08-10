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

          <h1 className="front-header">Learn React</h1>
          <h3 className="front-motto">
            SurviveJS will take you from apprentice to master
          </h3>

          <div className="front-button-wrapper">
            <a
              className="btn btn--buy-main"
              href="https://leanpub.com/survivejs-react-es"
            >
              Become a React master
            </a>
          </div>

          <div className="front-button-wrapper">
            <span className="read-free">
              <a href="/react/introduction/">
                Read the free version of the React book
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
  "Want to learn React? Get started for free and build a Kanban board by following the example project.";

export default SiteIndex;
