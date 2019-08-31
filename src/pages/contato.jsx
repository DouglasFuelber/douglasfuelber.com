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
        
        <Helmet>
            <title>{`Contato | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
        
        <div id="contact-container" className="tertiary_bg">
        
          <div id="page_title" className="md-grid md-cell--8">
            <h1 className="left-border-area light-border">Contato</h1>
          </div>

          <ContactForm/>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;