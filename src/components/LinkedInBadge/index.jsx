import React, { Component } from "react";

class LinkedInBadge extends Component {
  render() {

    var aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "https://platform.linkedin.com/badges/js/profile.js";
    aScript.async = true;
    aScript.defer = true;
    document.head.appendChild(aScript);

    return (
      <div className="linkedin-badge-container mobile-fix">
        <div className="linkedin-badge-wrapper md-cell--center">
          <div className="md-grid">
            <div className="md-cell--center md-cell--4">
                <div class="LI-profile-badge"  data-version="v1" data-size="small" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="douglasfuelber">
                    <a class="LI-simple-link" href='https://br.linkedin.com/in/douglasfuelber/en?trk=profile-badge'>Douglas Fuelber</a>
                </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default LinkedInBadge;
