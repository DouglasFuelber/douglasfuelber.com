import React, { Component } from "react";
import resume from "../../../data/Resume";
import "./ResumeSkills.scss";

class ResumeSkills extends Component {
    render() {
        return (
            <div className="skills-container mobile-fix">
                <div className="skills-wrapper md-cell--center">
                    <div className="md-cell--center md-cell--middle md-cell--12">
                        <h3>Habilidades</h3>
                        <div id="skills">
                            {this.getSkills()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getSkills() {    
        return resume.skills.map(skill => (
            <div className="skill left-border-area light-border">
                <h4 className="skill-title">{skill}</h4>
            </div>          
        ));
    }
}

export default ResumeSkills;