import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { resume } from "../../../data/en";

import "./ResumeLanguages.scss";

export default () => {
    const intl = useIntl();

    const getLanguages = () => {
        return Object.keys(resume.languages).map(key => (
            <div className="md-cell--4">
                <div className="language left-border-area light-border">
                    <h4 className="language-title">{intl.formatMessage({ id: `resume.languages.${key}.title` })}</h4>
                    <div className="language-level">{intl.formatMessage({ id: `resume.languages.${key}.level` })}</div>
                </div>
            </div>
        ));
    }

    return <div className="languages-container mobile-fix">
        <div className="languages-wrapper md-cell--center">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeLanguages.title` })}</h3>
                <div id="languages" className="md-grid">
                    {getLanguages()}
                </div>
            </div>
        </div>
    </div>
}