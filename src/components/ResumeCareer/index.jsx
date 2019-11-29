import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { resume }  from "../../intl/en";

import "./ResumeCareer.scss";

export default () => {
    const intl = useIntl();

    const getJobs = () => {
        return Object.keys(resume.career).map((key) => (
            <div className="job left-border-area light-border">
                <h4 className="job-title">{intl.formatMessage({ id: `resume.career.${key}.jobTitle` })}</h4>
                <h5 className="job-company">
                    <a href={intl.formatMessage({ id: `resume.career.${key}.companyUrl` })} target="_blank" rel="noopener">{intl.formatMessage({ id: `resume.career.${key}.company` })} <i class="fas fa-external-link-alt external-link-icon"></i></a>
                </h5>
                <div className="job-location">{intl.formatMessage({ id: `resume.career.${key}.companyLocation` })}</div>
                <p className="job-description">{intl.formatMessage({ id: `resume.career.${key}.description` })}</p>
                <div className="job-begin-date">
                    <div className="job-date">
                        <div className="job-begin-month">{intl.formatMessage({ id: `resume.career.${key}.beginDate.month` })}</div>
                        <div className="job-begin-year">{intl.formatMessage({ id: `resume.career.${key}.beginDate.year` })}</div>
                    </div>
                    <div className="date-indicator"></div>
                </div>
            </div>
        ));
    }

    return <div className="career-container mobile-fix">
        <div className="career-wrapper md-cell--center">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeCareer.title` })}</h3>
                <div id="jobs">
                    <div className="job-begin-date current">
                        <div className="job-begin-month">{intl.formatMessage({ id: `components.resumeCareer.current` })}</div>
                        <div className="date-indicator"></div>
                    </div>
                    {getJobs()}
                </div>
            </div>
        </div>
    </div>
}