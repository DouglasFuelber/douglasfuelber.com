import React from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";

import config from "../data/site-data";

import "./404.scss";

const PageNotFound = ({ location }) => {
  const intl = useIntl();
  return <Layout location={location} title={intl.formatMessage({ id: "404.pageTitle" })}>
    <div id="not-found-container">
      <Helmet>
        <title>{`${intl.formatMessage({ id: "404.pageTitle" })} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/404/`} />
      </Helmet>
      <h1>Ops!</h1>
      <h2>{intl.formatMessage({ id: "404.subtitle" })}</h2>
      <Button className="primary-button" href={`/${intl.locale}/`}>{intl.formatMessage({ id: "404.button" })}</Button>
    </div>
  </Layout>
}

export default PageNotFound;