import React from "react";
import { useIntl } from "gatsby-plugin-intl"
import Helmet from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Navigation from "../Navigation";
import config from "../../../data/SiteConfig";
import "./index.scss";
import "../../layout/global.scss";

export default ({ children }) => {
  const intl = useIntl()
  return (
    <Navigation config={config} LocalTitle={children.title}>
      <div>
        <Helmet>
          <html lang={intl.locale} />
          <meta name="description" content={config.siteDescription} />
          <script src='https://www.google.com/recaptcha/api.js' async></script>
        </Helmet>
        {children}
      </div>
    </Navigation>
  )
}