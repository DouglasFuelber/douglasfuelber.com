import React from "react";
import Helmet from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <html lang="pt-BR"/>
            <meta name="description" content={config.siteDescription} />
            <script src='https://www.google.com/recaptcha/api.js' async></script>
          </Helmet>
          {children}
        </div>
      </Navigation>
    );
  }
}
