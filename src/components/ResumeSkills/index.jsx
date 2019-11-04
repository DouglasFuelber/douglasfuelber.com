import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { resume }  from "../../../data/en";

import "./ResumeSkills.scss";

export default () => {
    const intl = useIntl();

    const getSkills = () => {
        return Object.keys(resume.skills).map(key => (
            <div className="skill left-border-area light-border">
                <h4 className="skill-title">{intl.formatMessage({ id: `resume.skills.${key}` })}</h4>
            </div>
        ));
    }

    return <div className="skills-container mobile-fix">
        <div className="skills-wrapper md-cell--center">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeSkills.title` })}</h3>
                <div id="skills">
                    {getSkills()}
                </div>
            </div>
        </div>
    </div>
}