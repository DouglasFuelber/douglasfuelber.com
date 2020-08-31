import React, { useMemo } from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '../Header';
import Footer from '../Footer';

import GlobalStyle from '../../styles/global';
import { Container, ContentWrapper } from './styles';

const Layout: React.FC = ({ children }) => {
  const intl = useIntl();

  const isHome = useMemo(() => {
    return window.location.pathname === `/${intl.locale}/`;
  }, []);

  return (
    <>
      <Helmet >
        <html lang={intl.locale} />
        <meta
          name="description"
          content={intl.formatMessage({ id: 'site.description' })}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {(!isHome) && <Header />}
      <Container>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
      {(!isHome) && <Footer />}
      <GlobalStyle />
    </>
  );
};

export default Layout;
