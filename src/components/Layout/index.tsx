import React, { ReactNode, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-react-intl';

import Header from '../Header';
import SEO from '../SEO';
import Footer from '../Footer';

import config from '../../data/site-data';

import GlobalStyle from '../../styles/global';
import { Container, ChildrenWrapper } from './styles';

interface ILayoutProps {
  isHome?: boolean;
  pageTitle?: string;
  pageRelativeUrl?: string;
  post?: {
    title: string;
    excerpt: string;
    cover: string;
  };
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({
  isHome = false,
  pageTitle = '',
  pageRelativeUrl = '',
  post = undefined,
  children,
}) => {
  const intl = useIntl();

  const title = useMemo(() => {
    let { siteTitle } = config;
    if (pageTitle) siteTitle = `${pageTitle} | ${siteTitle}`;
    return siteTitle;
  }, []);

  const pageLink = useMemo(() => {
    let link: string = process.env.SITE_URL || '';
    if (config.defaultLanguage !== intl.locale) link += `/${intl.locale}`;
    if (pageRelativeUrl) link = `${link}/${pageRelativeUrl}/`;
    return link;
  }, []);

  return (
    <Container>
      <Helmet>
        <html lang={intl.locale} />
        <title>{title}</title>
        <link rel="canonical" href={pageLink} />

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO pageLink={pageLink} post={post} />
      {!isHome && <Header pageUrl={pageRelativeUrl} />}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer IsHome={isHome} />
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
