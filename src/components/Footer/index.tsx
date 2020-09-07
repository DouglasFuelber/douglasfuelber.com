import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import LanguageSelector from '../LanguageSelector';

import {
  Container,
  Selectors,
  InfoWrapper,
  SocialLinks,
  Copyright,
} from './styles';

interface IFooterProps {
  IsHome: boolean;
}

const Footer: React.FC<IFooterProps> = ({ IsHome }) => {
  const intl = useIntl();

  return (
    <Container>
      {IsHome && (
        <Selectors>
          <LanguageSelector />
        </Selectors>
      )}
      <InfoWrapper>
        <SocialLinks>
          <a
            href="https://github.com/DouglasFuelber"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub color="#fff" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/douglasfuelber/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin color="#fff" size={24} />
          </a>
        </SocialLinks>
        <Copyright>
          <img src="/logos/logo.svg" alt="Douglas Fuelber" />
          <h4>
            {`${intl.formatMessage({
              id: 'site.copyright',
            })} | ${new Date().getFullYear()}`}
          </h4>
        </Copyright>
      </InfoWrapper>
    </Container>
  );
};

export default Footer;
