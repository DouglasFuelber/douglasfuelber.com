import React from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";

import config from "../data/site-data";

import "./success.scss";

const SuccessContact = ({ location }) => {
  const intl = useIntl();

  return <Layout location={location} title={intl.formatMessage({ id: "success.pageTitle" })}>
    <div id="success-message-container">
      <Helmet>
        <title>{`${intl.formatMessage({ id: "success.pageTitle" })} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/success/`} />
      </Helmet>
      <h1>{intl.formatMessage({ id: "success.pageTitle" })}!</h1>
      <h2>{intl.formatMessage({ id: "success.subtitle" })}</h2>
      <Button className="primary-button" href={`/${intl.locale}/`}>{intl.formatMessage({ id: "success.button" })}</Button>
    </div>
  </Layout>
}

export default SuccessContact;