import { Home } from "../../../data/SiteContent";
import { Link } from "gatsby";
import React from "react";

import "./HomeLinks.scss";

export default ({ collumnSize }) =>
  <div className="links-container">
    <div className="md-grid links-wrapper">
      {Home.homeLinks.map(item => (
        <div className={`link md-cell--center md-text-center md-cell--${collumnSize}`}>
          <Link to={item.link}>
            <div className="icon">
              <i className={`fas ${item.icon} fa-2x`}></i>
            </div>
            <div className="text">
              <h5>{item.secondaryTitle}</h5>
              <h3>{item.primaryTitle}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>