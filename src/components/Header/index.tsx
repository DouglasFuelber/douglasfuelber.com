import React, { useCallback } from 'react';
import { Link, useIntl } from 'gatsby-plugin-intl';
import LanguageSelector from '../LanguageSelector';

import { Container, ContentWrapper, Nav } from './styles';

const Header: React.FC = () => {
  const intl = useIntl();

  const getNavItemClass = useCallback((link: string) => {
    return link === window.location.pathname ? 'active' : '';
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Nav>
          <Link to="/">
            <img src="/logos/logo.svg" alt="Douglas Fuelber" />
          </Link>
          <ul>
            <li>
              <Link to="/" className={getNavItemClass(`/${intl.locale}/`)}>
                {intl.formatMessage({ id: 'navigation.home.title' })}
              </Link>
            </li>
            <li>
              <Link
                to="/about/"
                className={getNavItemClass(`/${intl.locale}/about/`)}
              >
                {intl.formatMessage({ id: 'navigation.about.title' })}
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                className={getNavItemClass(`/${intl.locale}/blog/`)}
              >
                {intl.formatMessage({ id: 'navigation.blog.title' })}
              </Link>
            </li>
            <li>
              <Link
                to="/contact/"
                className={getNavItemClass(`/${intl.locale}/contact/`)}
              >
                {intl.formatMessage({ id: 'navigation.contact.title' })}
              </Link>
            </li>
          </ul>
        </Nav>
        <LanguageSelector />
      </ContentWrapper>
    </Container>
  );
};

export default Header;
