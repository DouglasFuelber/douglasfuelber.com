import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import config from "../../data/SiteConfig";
import "./about.scss";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Sobre mim">
        <div id="about-container">
          <Helmet>
            <title>{`Sobre mim | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
          <ResumeCareer />
          <ResumeEducation />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
