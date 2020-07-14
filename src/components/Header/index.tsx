import React from 'react';
import LanguageSelector from '../LanguageSelector';

import { Container, ContentWrapper } from './styles';

const Header: React.FC = () => {
  return <Container>
    <ContentWrapper>
      <LanguageSelector />
    </ContentWrapper>
  </Container>
};

export default Header;
