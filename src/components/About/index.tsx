import React, { useCallback } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-react-intl';

import { userName } from '../../data/site-data';

import { Container, AboutDescription } from './styles';

interface IAboutProps {
  vertical?: boolean;
}

const About: React.FC<IAboutProps> = ({ vertical }) => {
  const intl = useIntl();

  const getAvatar = useCallback(() => {
    return (
      <StaticQuery
        query={graphql`
          query ImageQuery {
            image: imageSharp(fixed: { originalName: { regex: "/avatar/" } }) {
              fixed(width: 180) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        `}
        render={data => <Img alt={userName} fixed={data.image.fixed} />}
      />
    );
  }, []);

  return (
    <Container vertical={vertical}>
      {getAvatar()}
      <AboutDescription vertical={vertical}>
        {intl.formatMessage({ id: 'site.userDescription' })}
      </AboutDescription>
    </Container>
  );
};

export default About;
