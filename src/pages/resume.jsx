import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumePublications from "../components/ResumePublications";
import ResumeSkills from "../components/ResumeSkills";
import config from "../../data/SiteConfig";
import "./resume.scss";

class ResumePage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Resume">
          <Helmet>
            <title>{`Resume | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/resume/`} />
          </Helmet>
          <div id="page_title" className="md-grid md-cell--8">
              <h1>Resume</h1>
          </div>
          <div id="resume-container">
            <About />
            <ResumeCareer />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeLanguages />
            <ResumePublications />
          </div>
      </Layout>
    );
  }
}

export default ResumePage;
