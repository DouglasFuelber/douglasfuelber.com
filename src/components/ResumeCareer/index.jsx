import React, { Component } from "react";
import resume from "../../../data/Resume";
import "./ResumeCareer.scss";

class ResumeCareer extends Component {
    render() {
        return (
            <div className="career-container mobile-fix">
                <div className="career-wrapper md-cell--center">
                    <div className="md-grid">
                        <h3>Experiência</h3>
                        <div id="jobs">
                            <div className="job-begin-date current">
                                <div className="job-begin-month">Atualmente</div>
                                <div className="date-indicator"></div>
                            </div>
                            {this.getJobs()}
                        </div>         
                    </div>                    
                </div>
            </div>
        );
    }
    getJobs() {    
        return resume.career.map(job => (
            <div className="job left-border-area light-border">
                <h4 className="job-title">{job.jobTitle}</h4>
                <h5 className="job-company">
                    <a href={job.companyUrl} target="_blank">{job.company}</a>
                </h5>
                <div className="job-location">{job.companyLocation}</div>                
                <p className="job-description">{job.description}</p>
                <div className="job-begin-date">
                    <div className="job-date">
                        <div className="job-begin-month">{job.beginDate.month}</div>
                        <div className="job-begin-year">{job.beginDate.year}</div>
                    </div>                    
                    <div className="date-indicator"></div>
                </div>
            </div>          
        ));
    }
}

export default ResumeCareer;