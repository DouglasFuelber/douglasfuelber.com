import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import { resume } from '../../i18n/en';

import { Container, Job, JobTitle, JobDate, DateIndicator } from './styles';

const ResumeCareer: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeCareer.title` })}</h3>
      {Object.keys(resume.career).map((key, index) => {
        return (
          <Job>
            {index === 0 && (
              <JobDate isCurrent>
                <span>
                  {intl.formatMessage({
                    id: `components.resumeCareer.current`,
                  })}
                </span>
                <DateIndicator isCurrent />
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
              <span>
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.month`,
                })}
                <br />
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.year`,
                })}
              </span>
              <DateIndicator />
            </JobDate>
          </Job>
        );
      })}
    </Container>
  );
};
export default ResumeCareer;
