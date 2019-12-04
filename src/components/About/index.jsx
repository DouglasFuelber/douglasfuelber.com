import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

import { userName } from "../../data/site-data";

import "./About.scss";

export default () => {

  const intl = useIntl();

  const getAvatar = () => {
    return <StaticQuery
              query={graphql`
                query ImageQuery {
                  image: imageSharp(fixed: {originalName: {regex: "/avatar/"}}) {
                    fixed(width: 250) {
                      ...GatsbyImageSharpFixed
                      originalName
                    }
                  }
                }
              `}
              render={data => (
                <Img
                  alt={userName}
                  className="about-img"
                  fixed={data.image.fixed} />
              )}
            />
  }
  
  return <div className="about-container mobile-fix">
    <div className="about-wrapper md-cell--center md-cell--10">
      <div className="md-grid">
        <div className="md-cell--center md-cell--3 md-text-center">
          {getAvatar()}
        </div>
        <div className="md-cell--center md-cell--middle md-cell--9">
          <p className="about-text left-border-area light-border">{intl.formatMessage({ id: "site.userDescription" })}</p>
        </div>
      </div>
    </div>
  </div>
}