import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';
import { languages } from '../../data/site-data';

import { Container, LanguagesWrapper } from './styles';

const LanguageSelector: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <FaGlobeAmericas size={16} color="#fff" />
      <LanguagesWrapper>
        {languages.map(language => (
          <li key={language.value}>
            <button
              type="button"
              className={`${intl.locale === language.value ? 'active' : ''}`}
              onClick={() => changeLocale(language.value)}
            >
              {language.label}
            </button>
          </li>
        ))}
      </LanguagesWrapper>
    </Container>
  );
};

export default LanguageSelector;
