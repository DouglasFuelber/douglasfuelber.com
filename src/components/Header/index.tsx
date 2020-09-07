import React, { useCallback, useState } from 'react';
import { Link, useIntl } from 'gatsby-plugin-intl';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from '../LanguageSelector';

import { Container, ContentWrapper, MenuButton, Menu, Nav } from './styles';

interface IHeaderProps {
  pageUrl: string;
}

const Header: React.FC<IHeaderProps> = ({ pageUrl = '' }) => {
  const intl = useIntl();
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavItemClass = useCallback((link: string = '') => {
    return link === pageUrl ? 'active' : '';
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Link to="/">
          <img src="/logos/logo.svg" alt="Douglas Fuelber" />
        </Link>
        <MenuButton
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {!menuOpen && <FaBars size={24} />}
          {menuOpen && <FaTimes size={24} />}
        </MenuButton>
        <Menu isOpen={menuOpen}>
          <Nav>
            <ul>
              <li>
                <Link to="/" className={getNavItemClass()}>
                  {intl.formatMessage({ id: 'navigation.home.title' })}
                </Link>
              </li>
              <li>
                <Link to="/about/" className={getNavItemClass('about')}>
                  {intl.formatMessage({ id: 'navigation.about.title' })}
                </Link>
              </li>
              <li>
                <Link to="/blog/" className={getNavItemClass('blog')}>
                  {intl.formatMessage({ id: 'navigation.blog.title' })}
                </Link>
              </li>
              <li>
                <Link to="/contact/" className={getNavItemClass('contact')}>
                  {intl.formatMessage({ id: 'navigation.contact.title' })}
                </Link>
              </li>
            </ul>
          </Nav>
          <LanguageSelector />
        </Menu>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
