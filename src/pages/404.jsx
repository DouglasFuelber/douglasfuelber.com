import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./404.scss";

class PageNotFound extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Página não encontrada">
        <div id="not-found-container">
          <Helmet>
            <title>{`Página não encontrada | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/404/`} />
          </Helmet>
            <h1>Ops!</h1>
            <h2>Não foi possível encontrar a página que você está buscando...</h2>
            <Button className="primary-button" href="/">Continuar navegando no site</Button>
        </div>
      </Layout>
    );
  }
}

export default PageNotFound;
