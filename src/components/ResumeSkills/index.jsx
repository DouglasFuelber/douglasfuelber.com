import React from "react";
import { Grid, Cell } from 'react-md';
import { useIntl } from "gatsby-plugin-intl";
import LevelCounter from "../LevelCounter";

import { userSkills } from "../../data/site-data";

import "./ResumeSkills.scss";

export default () => {
    const intl = useIntl();

    const getSkills = () => {
        return userSkills.sort((a, b) => (a.level < b.level) ? 1 : -1).map(skill => (
            <Cell size="4" className="skill left-border-area light-border">
                <h4 className="skill-title">{skill.label}</h4>
                <LevelCounter level={skill.level} />
            </Cell>
        ));
    }

    return <div className="skills-container mobile-fix">
        <div className="skills-wrapper md-cell--center md-cell--10">
            <div className="md-cell--center md-cell--middle md-cell--12">
                <h3>{intl.formatMessage({ id: `components.resumeSkills.title` })}</h3>
                <Grid id="skills">
                    {getSkills()}
                </Grid>
            </div>
        </div>
    </div>
}