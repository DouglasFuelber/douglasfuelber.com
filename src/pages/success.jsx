import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./success.scss";

class SuccessContact extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Mensagem enviada">
        <div id="success-message-container">
          <Helmet>
            <title>{`Mensagem enviada | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/success/`} />
          </Helmet>
            <h1>Mensagem enviada!</h1>
            <h2>Obrigado por me contatar! Responderei assim que possível...</h2>
            <Button className="primary-button" href="/">Continuar navegando no site</Button>
        </div>
      </Layout>
    );
  }
}

export default SuccessContact;
