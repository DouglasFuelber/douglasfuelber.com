import React from 'react';

import { Container } from './styles';

interface IPageTitleProps {
  title: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default PageTitle;
