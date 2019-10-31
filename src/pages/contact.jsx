import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import config from "../../data/SiteConfig";
import "./contact.scss";

const ContactPage = ({ location }) =>
  <Layout location={location} title="Contato">

    <Helmet>
      <title>{`Contato | ${config.siteTitle}`}</title>
      <link rel="canonical" href={`${config.siteUrl}/contact/`} />
    </Helmet>

    <div id="contact-container" className="tertiary_bg">

      <div id="page_title" className="md-grid md-cell--8">
        <h1 className="left-border-area light-border">Contato</h1>
      </div>

      <div id="page_content">
        <ContactForm />
      </div>
    </div>
  </Layout>

export default ContactPage;