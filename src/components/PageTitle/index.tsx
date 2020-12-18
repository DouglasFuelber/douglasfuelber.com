import React from 'react';

import { Container } from './styles';

interface IPageTitleProps {
  title: String;
  subtitle?: String;
  blogPostPage?: Boolean;
}

const PageTitle: React.FC<IPageTitleProps> = ({
  title,
  subtitle,
  blogPostPage,
}) => {
  return (
    <Container>
      {!blogPostPage && <h1>{title}</h1>}
      {blogPostPage && <h2>{title}</h2>}
      {subtitle && <h5>{subtitle}</h5>}
    </Container>
  );
};

export default PageTitle;
