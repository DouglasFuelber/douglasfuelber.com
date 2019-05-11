import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ContactForm from "../components/ContactForm";
import config from "../../data/SiteConfig";
import "./contato.scss";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Contato">
        <div id="contact-container">
          <Helmet>
            <title>{`Contato | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
          <ContactForm/>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;