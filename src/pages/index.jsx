import React from "react";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import HomeLinks from "../components/HomeLinks";
import config from "../../data/SiteConfig";
import "./index.scss";

export default ({ location }) => {
  const intl = useIntl();
  return <Layout location={location} title="Home">
    <div className="index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/`} />
      </Helmet>

      <div id="main_area">

        <div id="main_area_content">

          <div id="page_title">
            <h1>Douglas Fuelber</h1>
            <h2>{intl.formatMessage({ id: "home.subtitle" })}</h2>
          </div>

          <div id="page_content">
            <div id="icons_area" className="md-cell--center">
              <HomeLinks collumnSize={4} />
            </div>
          </div>

        </div>

      </div>

    </div>
  </Layout>
}