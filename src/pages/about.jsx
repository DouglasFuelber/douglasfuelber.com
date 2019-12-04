import React from "react";
import Helmet from "react-helmet";
import { Grid } from 'react-md';
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";
import About from "../components/About";
import LinkedInBadge from "../components/LinkedInBadge";
import PageTitle from "../components/PageTitle";
import ResumeCareer from "../components/ResumeCareer";
import ResumeEducation from "../components/ResumeEducation";
import ResumeLanguages from "../components/ResumeLanguages";
import ResumePublications from "../components/ResumePublications";
import ResumeSkills from "../components/ResumeSkills";

import config from "../data/site-data";

import "./about.scss";

const AboutPage = ({ location }) => {
  const intl = useIntl();

  return <Layout location={location} title={intl.formatMessage({ id: "about.pageTitle" })}>
    <div id="about-container" className="tertiary_bg">
      <Helmet>
        <title>{`${intl.formatMessage({ id: "about.pageTitle" })} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/about/`} />
      </Helmet>

      <PageTitle title={intl.formatMessage({ id: "about.pageTitle" })} />

      <div id="page_content">
        <Grid>
          <div className="md-cell--10 md-cell--center">
            <About />
            <ResumeCareer />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeLanguages />
            <ResumePublications />
            <Grid>
              <LinkedInBadge />
            </Grid>            
          </div>
        </Grid>
      </div>
    </div>
  </Layout>
}

export default AboutPage;