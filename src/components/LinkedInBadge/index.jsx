import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import "./LinkedInBadge.scss";

export default () => {
  if (typeof document !== `undefined`) {
    var aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "https://platform.linkedin.com/badges/js/profile.js";
    aScript.async = true;
    aScript.defer = true;
    document.head.appendChild(aScript);
  }

  const intl = useIntl();
  const locale = intl.locale == 'en' ? 'en_US' : 'pt_BR';

  return <div className="linkedin-badge-container mobile-fix md-grid">
    <div className="linkedin-badge-wrapper md-cell--center md-cell--10">
      <div className="md-cell--center md-cell--middle md-cell--12">
        <div className="badge left-border-area light-border">
          <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale={locale} data-type="horizontal" data-theme="light" data-vanity="douglasfuelber">
            <a class="LI-simple-link" href={`https://br.linkedin.com/in/douglasfuelber/${intl.locale}?trk=profile-badge`}>Douglas Fuelber</a>
          </div>
        </div>
      </div>
    </div>
  </div>
}