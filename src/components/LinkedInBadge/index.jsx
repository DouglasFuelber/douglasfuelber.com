import React, { Component } from "react";
import "./LinkedInBadge.scss";

class LinkedInBadge extends Component {
  render() {

    if (typeof document !== `undefined`) {
      var aScript = document.createElement('script');
      aScript.type = 'text/javascript';
      aScript.src = "https://platform.linkedin.com/badges/js/profile.js";
      aScript.async = true;
      aScript.defer = true;
      document.head.appendChild(aScript);
    }  

    return (
      <div className="linkedin-badge-container mobile-fix">
        <div className="linkedin-badge-wrapper md-cell--center">
          <div className="md-cell--center md-cell--middle md-cell--12">
            <div className="badge left-border-area light-border">
              <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="pt_BR" data-type="horizontal" data-theme="light" data-vanity="douglasfuelber">
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
