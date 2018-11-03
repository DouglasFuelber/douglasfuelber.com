import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./404.scss";

class PageNotFound extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Página Não Encontrada">
        <div id="not-found-container">
          <Helmet>
            <title>{`Página Não Encontrada | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/404/`} />
          </Helmet>
            <h1>404</h1>
            <h2>Ops! Não encontramos a página que você procura...</h2>
            <Button className="primary-button" href="/">Ir para a página inicial</Button>
        </div>
      </Layout>
    );
  }
}

export default PageNotFound;
