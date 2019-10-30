import React from "react";
import ContactLinks from "../ContactLinks";
import { useIntl } from "gatsby-plugin-intl";
import config, { fixedFooter, userLinks } from "../../../data/SiteConfig";
import "./Footer.scss";

export default () => {
  const intl = useIntl();
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="md-grid md-cell--8">
          <div className="md-cell--6">
            {userLinks ? <ContactLinks config={config} /> : null}
          </div>
          <div className="notice-container md-cell--6">
            <div className="copyright">
              <h4>{intl.formatMessage({ id: "site.copyright" })}</h4>
            </div>
          </div>
        </div>
      </footer>
    );
  }