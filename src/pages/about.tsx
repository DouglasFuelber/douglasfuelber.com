import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import About from '../components/About';
// import LinkedInBadge from '../components/LinkedInBadge';
import ResumeCareer from '../components/ResumeCareer';
import ResumeEducation from '../components/ResumeEducation';
import ResumeSkills from '../components/ResumeSkills';
import ResumeLanguages from '../components/ResumeLanguages';
import ResumePublications from '../components/ResumePublications';

import { Container } from './success-styles';

const AboutPage: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout
      pageTitle={intl.formatMessage({ id: 'about.pageTitle' })}
      pageRelativeUrl="about"
    >
      <PageTitle title={intl.formatMessage({ id: 'about.pageTitle' })} />
      <Container>
        <About />
        <ResumeCareer />
        <ResumeEducation />
        <ResumeSkills />
        <ResumeLanguages />
        <ResumePublications />
        {/* <LinkedInBadge /> */}
      </Container>
    </Layout>
  );
};

export default AboutPage;
