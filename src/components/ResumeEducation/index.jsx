import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { resume } from "../../translations/en";

import "./ResumeEducation.scss";

export default () => {
    const intl = useIntl();

    const getEducation = () => {
        return Object.keys(resume.education).map(key => (
            <div className="education left-border-area light-border">
                <h4 className="education-title">{intl.formatMessage({ id: `resume.education.${key}.title` })}</h4>
                <h5 className="education-school">
                    <a href={intl.formatMessage({ id: `resume.education.${key}.schoolUrl` })} target="_blank" rel="noopener">{intl.formatMessage({ id: `resume.education.${key}.school` })} <i class="fas fa-external-link-alt external-link-icon"></i></a>
                </h5>
                <div className="education-location">{intl.formatMessage({ id: `resume.education.${key}.schoolLocation` })}</div>
                <div className="education-period">{intl.formatMessage({ id: `resume.education.${key}.period` })}</div>
            </div>
        ));
    }

    return <div className="education-container mobile-fix">
        <div className="education-wrapper md-cell--center">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeEducation.title` })}</h3>
                <div id="educations">
                    {getEducation()}
                </div>
            </div>
        </div>
    </div>
}