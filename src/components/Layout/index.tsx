import React, { ReactNode, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-react-intl';
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

const Layout: React.FC<ILayoutProps> = ({
  isHome = false,
  pageTitle = '',
  pageRelativeUrl = '',
  children,
}) => {
  const intl = useIntl();

  const title = useMemo(() => {
    let { siteTitle } = config;
    if (pageTitle) siteTitle = `${pageTitle} | ${siteTitle}`;
    return siteTitle;
  }, []);

  const pageLink = useMemo(() => {
    let link = `${process.env.SITE_URL}/${intl.locale}/`;
    if (pageRelativeUrl) link = `${link}/${pageRelativeUrl}/`;
    return link;
  }, []);

  return (
    <Container>
      <Helmet>
        <html lang={intl.locale} />
        <title>{title}</title>
        <link rel="canonical" href={pageLink} />
        <meta
          name="description"
          content={intl.formatMessage({ id: 'site.description' })}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {!isHome && <Header pageUrl={pageRelativeUrl} />}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer IsHome={isHome} />
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
