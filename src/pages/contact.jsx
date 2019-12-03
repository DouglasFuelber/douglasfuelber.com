import React from "react";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

import config from "../data/site-data";

import "./contact.scss";

const ContactPage = ({ location }) => {
  const intl = useIntl();

  return <Layout location={location} title={intl.formatMessage({ id: "contact.pageTitle" })}>

    <Helmet>
      <title>{`${intl.formatMessage({ id: "contact.pageTitle" })} | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/contact/`} />
    </Helmet>

    <div id="contact-container" className="tertiary_bg">

      <PageTitle title={intl.formatMessage({ id: "contact.pageTitle" })} />

      <div id="page_content">
        <ContactForm />
      </div>
    </div>
  </Layout>
}

export default ContactPage;