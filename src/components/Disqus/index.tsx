import React, { useMemo } from 'react';
import Disqus from 'gatsby-plugin-disqus';
import { useIntl } from 'gatsby-plugin-react-intl';
import config from '../../data/site-data';

import { Container } from './styles';

interface IDisqusAreaProps {
  postTitle: String;
  postUrl: String;
}

const DisqusArea: React.FC<IDisqusAreaProps> = ({ postTitle, postUrl }) => {
  const intl = useIntl();

  const postFullUrl = useMemo(() => {
    let url: string = process.env.SITE_URL || '';
    if (config.defaultLanguage !== intl.locale) url += `/${intl.locale}`;
    url += `/${postUrl}`;

    return url;
  }, []);

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `blog.posts.comments` })}</h3>
      <Disqus title={postTitle} identifier={postUrl} url={postFullUrl} />
    </Container>
  );
};

export default DisqusArea;
