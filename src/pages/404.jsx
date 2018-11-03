import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import "./404.scss";

class PageNotFound extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Page Not Found">
        <div id="not-found-container">
          <Helmet>
            <title>{`Page Not Found | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/404/`} />
          </Helmet>
            <h1>404</h1>
            <h2>Ops! We didn't find the page you're looking for...</h2>
            <Button className="primary-button" href="/">Take me to home page</Button>
        </div>
      </Layout>
    );
  }
}

export default PageNotFound;
