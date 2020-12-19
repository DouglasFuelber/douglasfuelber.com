import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import Layout from '../components/Layout';

import { Container, LinkButton } from '../styles/404-styles';

const PageNotFound: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout
      pageTitle={intl.formatMessage({ id: '404.pageTitle' })}
      pageRelativeUrl="404"
    >
      <Container>
        <h1>Ops!</h1>
        <h2>{intl.formatMessage({ id: '404.subtitle' })}</h2>
        <LinkButton href={`/${intl.locale}/`}>
          {intl.formatMessage({ id: '404.button' })}
        </LinkButton>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
