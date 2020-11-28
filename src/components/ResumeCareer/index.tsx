import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { resume } from '../../i18n/en';

import { Container, Job, JobTitle, JobDate, DateIndicator } from './styles';

const ResumeCareer: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeCareer.title` })}</h3>
      {Object.keys(resume.career).map((key, index) => {
        return (
          <Job key={`job-${key}`}>
            {index === 0 && (
              <JobDate isCurrent>
                <DateIndicator isCurrent />
                <span>
                  {intl.formatMessage({
                    id: `components.resumeCareer.current`,
                  })}
                </span>
              </JobDate>
            )}
            <JobTitle>
              <h4>
                {intl.formatMessage({ id: `resume.career.${key}.jobTitle` })}
              </h4>
              <h5>
                <a
                  href={intl.formatMessage({
                    id: `resume.career.${key}.companyUrl`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {intl.formatMessage({ id: `resume.career.${key}.company` })}
                  <FaExternalLinkAlt />
                </a>
                {` - ${intl.formatMessage({
                  id: `resume.career.${key}.companyLocation`,
                })}`}
              </h5>
            </JobTitle>
            <p>
              {intl.formatMessage({ id: `resume.career.${key}.description` })}
            </p>
            <JobDate>
              <DateIndicator />
              <span>
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.month`,
                })}
                <br />
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.year`,
                })}
              </span>
            </JobDate>
          </Job>
        );
      })}
    </Container>
  );
};
export default ResumeCareer;
