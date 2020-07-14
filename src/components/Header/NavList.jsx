import React from 'react';
import { Link, useIntl } from 'gatsby-plugin-intl';

function GetNavList(navigationLinks, userLinks) {
  const intl = useIntl();
  const NavList = [];

  if (navigationLinks) {
    navigationLinks.forEach(link => {
      NavList.push({
        primaryText: intl.formatMessage({ id: `navigation.${link.id}.title` }),
        leftIcon: <i className={link.iconClassName} />,
        component: Link,
        to: link.url,
      });
    });
    NavList.push({
      divider: true,
    });
  }

  if (userLinks) {
    userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <i className={link.iconClassName} />,
        component: 'a',
        href: link.url,
        target: '_blank',
      });
    });
  }
  return NavList;
}
export default GetNavList;
