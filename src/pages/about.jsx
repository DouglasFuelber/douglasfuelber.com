import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import LinkedInBadge from "../components/LinkedInBadge";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumePublications from "../components/ResumePublications";
import ResumeSkills from "../components/ResumeSkills";
import config from "../../data/SiteConfig";
import "./about.scss";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About me">
        <div id="about-container">
          <Helmet>
            <title>{`About me | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
          <ResumeCareer />
          <ResumeEducation />
          <ResumeSkills />
          <ResumeLanguages />
          <ResumePublications />
          <LinkedInBadge />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
