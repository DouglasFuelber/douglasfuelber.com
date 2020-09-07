import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

import { Container, ContentWrapper } from './contact-styles';

const ContactPage: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout
      pageTitle={intl.formatMessage({ id: 'contact.pageTitle' })}
      pageRelativeUrl="contact"
    >
      <PageTitle title={intl.formatMessage({ id: 'contact.pageTitle' })} />
      <Container>
        <ContentWrapper />
      </Container>
    </Layout>
  );
};

export default ContactPage;
