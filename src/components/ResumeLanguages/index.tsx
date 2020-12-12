import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import LevelCounter from '../LevelCounter';

import { userLanguages } from '../../data/site-data';

import { Container, LanguagesList, Language } from './styles';

const ResumeLanguages: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeLanguages.title` })}</h3>
      <LanguagesList>
        {userLanguages.map(language => (
          <Language key={language.key}>
            <h4>
              {intl.formatMessage({
                id: `resume.languages.${language.key}.title`,
              })}
            </h4>
            <span>
              {intl.formatMessage({
                id: `resume.languages.${language.key}.level`,
              })}
            </span>
            <LevelCounter level={language.level} />
          </Language>
        ))}
      </LanguagesList>
    </Container>
  );
};

export default ResumeLanguages;
