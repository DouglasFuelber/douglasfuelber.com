import React, { Component } from "react";
import resume from "../../../data/Resume";
import "./ResumePublications.scss";

class ResumePublications extends Component {
    render() {
        return (
            <div className="publications-container mobile-fix">
                <div className="publications-wrapper md-cell--center">
                    <div className="md-cell--center md-cell--middle md-cell--12">
                        <h3>Publicações</h3>
                        <div id="publications">
                            {this.getPublications()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getPublications() {    
        return resume.publications.map(publication => (
            <div className="publication left-border-area light-border">
                <div className="publication-type">{publication.type} | <span className="publication-language">{publication.language}</span></div>
                <h4 className="publication-title">
                    <a href={publication.link} target="_blank" rel="noopener">{publication.title} <i class="fas fa-external-link-alt external-link-icon"></i></a>
                </h4>
                <h5 className="publication-event">{publication.event}</h5>
                <div className="publication-eventComplement">{publication.eventComplement}</div>
                <div className="publication-date">{publication.date}</div>
                <div className="publication-colaborator">
                    <span className="publication-colaborator-role">{publication.colaborator.role}: </span>
                    {publication.colaborator.name}
                </div>
            </div>          
        ));
    }
}

export default ResumePublications;