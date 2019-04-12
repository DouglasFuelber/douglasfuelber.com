import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./success.scss";

class SuccessContact extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Message Sent">
        <div id="success-message-container">
          <Helmet>
            <title>{`Message Sent | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/success/`} />
          </Helmet>
            <h1>Message sent</h1>
            <h2>Thanks for contact me! I'll reply as soon as possible...</h2>
            <Button className="primary-button" href="/">Take me to home page</Button>
        </div>
      </Layout>
    );
  }
}

export default SuccessContact;
