import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { resume } from '../../i18n/en';

import { Container, EducationList, Education } from './styles';

const ResumeEducation: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeEducation.title` })}</h3>
      <EducationList>
        {Object.keys(resume.education).map(key => (
          <Education key={key}>
            <h4>
              {intl.formatMessage({ id: `resume.education.${key}.title` })}
            </h4>
            <span>
              {intl.formatMessage({ id: `resume.education.${key}.period` })}
            </span>
            <h5>
              <a
                href={intl.formatMessage({
                  id: `resume.education.${key}.schoolUrl`,
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: `resume.education.${key}.school` })}
                <FaExternalLinkAlt />
              </a>
              <span>
                {` - ${intl.formatMessage({
                  id: `resume.education.${key}.schoolLocation`,
                })}`}
              </span>
            </h5>
          </Education>
        ))}
      </EducationList>
    </Container>
  );
};

export default ResumeEducation;
