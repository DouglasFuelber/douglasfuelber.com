import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';

import config from '../data/site-data';

import { Container, TitleWrapper, IconsWrapper } from './index-styles';

export default () => {
  const intl = useIntl();
  return (
    <Layout>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/`} />
      </Helmet>

      <Container>
        <TitleWrapper>
          <h1>Hello,<br /> I am <strong>Douglas Fuelber</strong></h1>
          <h2>Full Stack Web Developer</h2>
        </TitleWrapper>
        <IconsWrapper>

        </IconsWrapper>
      </Container>

    </Layout>
  );
};
