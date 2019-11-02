import React from "react";
import Helmet from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";
import About from "../components/About";
import LinkedInBadge from "../components/LinkedInBadge";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumePublications from "../components/ResumePublications";
import ResumeSkills from "../components/ResumeSkills";

import config from "../../data/SiteConfig";

import "./about.scss";

const AboutPage = ({ location }) => {
  const intl = useIntl();

  return <Layout location={location} title={intl.formatMessage({ id: "about.pageTitle" })}>
    <div id="about-container" className="tertiary_bg">
      <Helmet>
        <title>{`${intl.formatMessage({ id: "about.pageTitle" })} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/about/`} />
      </Helmet>

      <div id="page_title" className="md-grid md-cell--8">
        <h1 className="left-border-area light-border">{intl.formatMessage({ id: "about.pageTitle" })}</h1>
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
}

export default AboutPage;