import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Header from '../Header';
import Footer from '../Footer';

import config from '../../data/site-data';

import GlobalStyle from '../../styles/global';
import { Container, ChildrenWrapper } from './styles';

interface ILayoutProps {
  isHome?: boolean;
  pageTitle?: string;
  pageRelativeUrl?: string;
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ isHome = false, pageTitle = "", pageRelativeUrl = "", children }) => {
  const intl = useIntl();
  return (
    <Container>
      <Helmet>
        <html lang={intl.locale} />
        <title>{`${(pageTitle && `${pageTitle} | `)} ${config.siteTitle}`}</title>
        <link
          rel="canonical"
          href={`${config.siteUrl}/${intl.locale}/${pageRelativeUrl && `${pageRelativeUrl}/`}`}
        />
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
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <Footer IsHome={isHome} />
      <GlobalStyle />
    </Container >
  );
};

export default Layout;
