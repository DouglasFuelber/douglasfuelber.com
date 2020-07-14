import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '../Header';
import Footer from '../Footer';

import GlobalStyle from '../../styles/global';

const Layout: React.FC = ({ children }) => {
  const intl = useIntl();
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
      <Header />
      <div className="app-container">{children}</div>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default Layout;
