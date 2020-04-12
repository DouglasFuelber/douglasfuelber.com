import React from "react";
import ContactLinks from "../ContactLinks";
import { useIntl } from "gatsby-plugin-intl";
import config, { fixedFooter, userLinks } from "../../data/site-data";
import "./Footer.scss";

export default () => {
  const intl = useIntl();
    return (
      <footer className={`md-grid ${fixedFooter ? "footer footer-fixed" : "footer"}`}>
        <div className="md-grid md-cell--10">
          <div className="md-cell--6">
            {userLinks ? <ContactLinks config={config} /> : null}
          </div>
          <div className="notice-container md-cell--6">
            <div className="copyright">              
              <h4>{intl.formatMessage({ id: "site.copyright" })} | {new Date().getFullYear()}</h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }