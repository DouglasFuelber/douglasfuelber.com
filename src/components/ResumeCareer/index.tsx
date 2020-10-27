import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import { resume } from '../../i18n/en';

import { Container } from './styles';

const ResumeCareer: React.FC = () => {
  const intl = useIntl();

  return (
    <Container>
      <h3>{intl.formatMessage({ id: `components.resumeCareer.title` })}</h3>
      <div>
        <div>
          {intl.formatMessage({ id: `components.resumeCareer.current` })}
        </div>
        {Object.keys(resume.career).map(key => {
          return (
            <>
              <h4>
                {intl.formatMessage({ id: `resume.career.${key}.jobTitle` })}
              </h4>
              <h5>
                <a
                  href={intl.formatMessage({
                    id: `resume.career.${key}.companyUrl`,
                  })}
                  target="_blank"
                  rel="noopener"
                >
                  {intl.formatMessage({ id: `resume.career.${key}.company` })}
                  <i className="fas fa-external-link-alt external-link-icon" />
                </a>
              </h5>
              <div>
                {intl.formatMessage({
                  id: `resume.career.${key}.companyLocation`,
                })}
              </div>
              <p>
                {intl.formatMessage({ id: `resume.career.${key}.description` })}
              </p>
              <div>
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.month`,
                })}
              </div>
              <div>
                {intl.formatMessage({
                  id: `resume.career.${key}.beginDate.year`,
                })}
              </div>
            </>
          );
        })}
      </div>
    </Container>
  );
};
export default ResumeCareer;
