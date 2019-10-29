import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import About from "../components/About";
import LinkedInBadge from "../components/LinkedInBadge";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumePublications from "../components/ResumePublications";
import ResumeSkills from "../components/ResumeSkills";
import config from "../../data/SiteConfig";
import "./sobre.scss";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Sobre mim">
        <div id="about-container" className="tertiary_bg">
          <Helmet>
            <title>{`Sobre mim | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/sobre/`} />
          </Helmet>

          <div id="page_title" className="md-grid md-cell--8">
            <h1 className="left-border-area light-border">Sobre mim</h1>
          </div>
          <div id="page_content">
            <About />
            <ResumeCareer />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeLanguages />
            <ResumePublications />
            <LinkedInBadge />
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
