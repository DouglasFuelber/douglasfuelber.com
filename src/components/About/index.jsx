import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import config from "../../data/site-data";

import "./About.scss";

export default () => {
  const intl = useIntl();
  return <div className="about-container mobile-fix">
    <div className="about-wrapper md-cell--center">
      <div className="md-grid">
        <div className="md-cell--center md-cell--4 md-text-center">
          <img
            src={config.userAvatar}
            className="about-img"
            alt={config.userName}
          />
        </div>
        <div className="md-cell--center md-cell--middle md-cell--8">
          <p className="about-text left-border-area light-border">{intl.formatMessage({ id: "site.userDescription" })}</p>
        </div>
      </div>
    </div>
  </div>
}