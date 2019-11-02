import React from "react";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl"
import Navigation from "../Navigation";

import config from "../../../data/SiteConfig";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import "./index.scss";
import "../../layout/global.scss";

export default ({ children }) => {
  const intl = useIntl()
  return (
    <Navigation config={config}>
      <div>
        <Helmet>
          <html lang={intl.locale} />
          <meta name="description" content={intl.formatMessage({ id: "site.description" })} />
        </Helmet>
        {children}
      </div>
    </Navigation>
  )
}