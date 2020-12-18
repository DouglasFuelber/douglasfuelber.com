import React from 'react';

import { Container } from './styles';

interface IPageTitleProps {
  title: String;
  subtitle?: String;
}

const PageTitle: React.FC<IPageTitleProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </Container>
  );
};

export default PageTitle;
