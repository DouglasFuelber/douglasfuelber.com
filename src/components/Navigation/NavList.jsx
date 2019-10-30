import React from "react";
import { Link, useIntl } from "gatsby-plugin-intl";

function GetNavList(userLinks) {
  const intl = useIntl();
  const NavList = [
    {
      primaryText: intl.formatMessage({ id: "navigation.home" }),
      leftIcon: <i className={"fas fa-home"}></i>,
      component: Link,
      to: "/"
    },
    {
      primaryText: intl.formatMessage({ id: "navigation.about" }),
      leftIcon: <i className={"fas fa-id-card"}></i>,
      component: Link,
      to: "/about/"
    },
    {
      primaryText: intl.formatMessage({ id: "navigation.blog" }),
      leftIcon: <i className={"fas fa-book-open"}></i>,
      component: Link,
      to: "/blog/"
    },
    {
      primaryText: intl.formatMessage({ id: "navigation.contact" }),
      leftIcon: <i className={"fas fa-comments"}></i>,
      component: Link,
      to: "/contact/"
    },
    {
      divider: true
    }
  ];

  if (userLinks) {
    userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <i className={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }
  return NavList;
}
export default GetNavList;