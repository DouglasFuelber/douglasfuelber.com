import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import Layout from '../components/Layout';

import { Container, LinkButton } from '../styles/success-styles';

const SuccessContact: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout
      pageTitle={intl.formatMessage({ id: 'success.pageTitle' })}
      pageRelativeUrl="success"
    >
      <Container>
        <h1>{`${intl.formatMessage({ id: 'success.pageTitle' })}!`}</h1>
        <h2>{intl.formatMessage({ id: 'success.subtitle' })}</h2>
        <LinkButton href={`/${intl.locale}/`}>
          {intl.formatMessage({ id: 'success.button' })}
        </LinkButton>
      </Container>
    </Layout>
  );
};

export default SuccessContact;
