import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { resume } from "../../i18n/en";

import "./ResumePublications.scss";

export default () => {
    const intl = useIntl();

    const getPublications = () => {
        return Object.keys(resume.publications).map(key => (
            <div className="publication left-border-area light-border">
                <div className="publication-type">{intl.formatMessage({ id: `resume.publications.${key}.type` })} | <span className="publication-language">{intl.formatMessage({ id: `resume.publications.${key}.language` })}</span></div>
                <h4 className="publication-title">
                    <a href={intl.formatMessage({ id: `resume.publications.${key}.link` })} target="_blank" rel="noopener">{intl.formatMessage({ id: `resume.publications.${key}.title` })} <i class="fas fa-external-link-alt external-link-icon"></i></a>
                </h4>
                <h5 className="publication-event">{intl.formatMessage({ id: `resume.publications.${key}.event` })}</h5>
                <div className="publication-eventComplement">{intl.formatMessage({ id: `resume.publications.${key}.eventComplement` })}</div>
                <div className="publication-date">{intl.formatMessage({ id: `resume.publications.${key}.date` })}</div>
                <div className="publication-colaborator">
                    <span className="publication-colaborator-role">{intl.formatMessage({ id: `resume.publications.${key}.colaborator.role` })}: </span>
                    {intl.formatMessage({ id: `resume.publications.${key}.colaborator.name` })}
                </div>
            </div>
        ));
    }

    return <div className="publications-container mobile-fix">
        <div className="publications-wrapper md-cell--center">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumePublications.title` })}</h3>
                <div id="publications">
                    {getPublications()}
                </div>
            </div>
        </div>
    </div>
}