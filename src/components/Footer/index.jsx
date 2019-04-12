import React, { Component } from "react";
import ContactLinks from "../ContactLinks";
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
          {/*userLinks ? <ContactLinks config={config} /> : null*/}
          <div className="notice-container md-grid md-cell--12">
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
