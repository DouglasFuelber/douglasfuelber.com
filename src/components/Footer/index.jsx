import React, { Component } from "react";
import ContactLinks from "../ContactLinks";
import LinkedInBadge from "../LinkedInBadge";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="md-grid md-cell--8">
          <div className="md-cell--6">
            {userLinks ? <ContactLinks config={config} /> : null}
          </div>
          <div className="notice-container md-cell--6">
            <div className="copyright">
              <h4>{copyright}</h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
