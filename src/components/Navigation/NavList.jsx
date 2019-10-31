import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";
import Languages from "../Languages";

function GetNavList(navigationLinks, userLinks) {

  const intl = useIntl();
  const NavList = [];

  if (navigationLinks) {
    navigationLinks.forEach(link => {
      NavList.push({
        primaryText: intl.formatMessage({ id: `navigation.${link.id}.title` }),
        leftIcon: <i className={link.iconClassName} />,
        component: Link,
        to: link.url
      });
    });
    NavList.push(
      {
        divider: true
      }
    )
  };

  if (userLinks) {
    NavList.push(
      {
        primaryText: intl.formatMessage({ id: "navigation.follow" }),
        subheader: true
      }
    )
    userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <i className={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
    NavList.push(
      {
        divider: true
      }
    )
  }
  
  NavList.push(
    {
      primaryText: "Idiomas",
      subheader: true
    }
  )

  return NavList.concat(<Languages/>);
}
export default GetNavList;