import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import LevelCounter from "../LevelCounter";

import { userLanguages } from "../../data/site-data";

import "./ResumeLanguages.scss";

export default () => {
    const intl = useIntl();

    const getLanguages = () => {
        return userLanguages.map(language => (
            <div className="md-cell--4">
                <div className="language left-border-area light-border">
                    <h4 className="language-title">{intl.formatMessage({ id: `resume.languages.${language.key}.title` })}</h4>
                    <div className="language-level">{intl.formatMessage({ id: `resume.languages.${language.key}.level` })}</div>
                    <LevelCounter level={language.level} />
                </div>
            </div>
        ));
    }

    return <div className="languages-container mobile-fix">
        <div className="languages-wrapper">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeLanguages.title` })}</h3>
                <div id="languages" className="md-grid">
                    {getLanguages()}
                </div>
            </div>
        </div>
    </div>
}