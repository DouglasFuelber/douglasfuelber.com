import React, { useCallback } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-react-intl';

import { userName } from '../../data/site-data';

import { Container, AboutDescription } from './styles';

const About: React.FC = () => {
  const intl = useIntl();

  const getAvatar = useCallback(() => {
    return (
      <StaticQuery
        query={graphql`
          query ImageQuery {
            image: imageSharp(fixed: { originalName: { regex: "/avatar/" } }) {
              fixed(width: 250) {
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
    <Container>
      {getAvatar()}
      <AboutDescription>
        {intl.formatMessage({ id: 'site.userDescription' })}
      </AboutDescription>
    </Container>
  );
};

export default About;
