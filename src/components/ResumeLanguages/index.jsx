import React, { Component } from "react";
import resume from "../../../data/Resume";
import "./ResumeLanguages.scss";

class ResumeLanguages extends Component {
    render() {
        return (
            <div className="languages-container mobile-fix">
                <div className="languages-wrapper md-cell--center">
                    <h3>Languages</h3>
                    <div id="languages" className="md-grid">
                        {this.getLanguages()}
                    </div>         
                </div>
            </div>
        );
    }
    getLanguages() {
        return resume.languages.map(language => (
            <div className="md-cell--4">
                <div className="language left-border-area light-border">
                    <h4 className="language-title">{language.title}</h4>
                    <div className="language-level">{language.level}</div>                
                </div>
            </div>            
        ));
    }
}

export default ResumeLanguages;