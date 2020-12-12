import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { resume } from '../../i18n/en';

import { Container, PublicationsList, Publication } from './styles';

const ResumePublications: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>
        {intl.formatMessage({ id: `components.resumePublications.title` })}
      </h3>
      <PublicationsList>
        {Object.keys(resume.publications).map(key => (
          <Publication>
            <h4>
              <a
                href={intl.formatMessage({
                  id: `resume.publications.${key}.link`,
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: `resume.publications.${key}.title` })}
                <FaExternalLinkAlt />
              </a>
            </h4>
            <h5>
              {`${intl.formatMessage({
                id: `resume.publications.${key}.event`,
              })} - ${intl.formatMessage({
                id: `resume.publications.${key}.eventComplement`,
              })}`}
              <span>
                {intl.formatMessage({ id: `resume.publications.${key}.date` })}
              </span>
            </h5>
            <div>
              {`${intl.formatMessage({
                id: `resume.publications.${key}.colaborator.role`,
              })}: ${intl.formatMessage({
                id: `resume.publications.${key}.colaborator.name`,
              })}`}
            </div>
          </Publication>
        ))}
      </PublicationsList>
    </Container>
  );
};

export default ResumePublications;
