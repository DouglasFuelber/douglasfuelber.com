import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";

import { navigationLinks } from "../../data/site-data";

import "./HomeLinks.scss";

export default ({ collumnSize }) => {
  const intl = useIntl();
  return <div className="links-container">
    <div className="md-grid links-wrapper">
      {navigationLinks.filter(item =>
        item.id != 'home'
      ).map(item => (
        <div className={`link md-cell--center md-text-center md-cell--${collumnSize}`}>
          <Link to={item.url}>
            <div className="icon">
              <i className={`${item.iconClassName} fa-2x`}></i>
            </div>
            <div className="text">
              <h5>{intl.formatMessage({ id: `navigation.${item.id}.subtitle` })}</h5>
              <h3>{intl.formatMessage({ id: `navigation.${item.id}.title` })}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
}