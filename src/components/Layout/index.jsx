import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Navigation from '../Navigation';
import Footer from '../Footer';

import GlobalStyle from '../../styles/global.ts';

import config from '../../data/site-data';

export default ({ children }) => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
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
      <Navigation config={config} />
      <div className="app-container">{children}</div>
      <Footer />
      <GlobalStyle />
    </>
  );
};
