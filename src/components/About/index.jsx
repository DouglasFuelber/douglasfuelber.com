import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container mobile-fix">
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
              <h3>About me</h3>
              <p className="about-text left-border-area light-border">{config.userDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
