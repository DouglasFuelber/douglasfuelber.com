import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

import { Container } from './styles';

const LinkedInBadge: React.FC = () => {
  if (typeof document !== `undefined`) {
    const aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
    aScript.async = true;
    aScript.defer = true;
    document.head.appendChild(aScript);
  }

  const intl = useIntl();
  const locale = intl.locale == 'en' ? 'en_US' : 'pt_BR';

  return (
    <Container>
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale={locale}
        data-type="horizontal"
        data-theme="light"
        data-vanity="douglasfuelber"
      >
        <a
          className="LI-simple-link"
          href={`https://br.linkedin.com/in/douglasfuelber/${intl.locale}?trk=profile-badge`}
        >
          Douglas Fuelber
        </a>
      </div>
    </Container>
  );
};

export default LinkedInBadge;
