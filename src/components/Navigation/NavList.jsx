import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Resume",
      leftIcon: <FontIcon>person</FontIcon>,
      component: Link,
      to: "/resume/"
    },
    {
      primaryText: "Blog",
      leftIcon: <FontIcon>library_books</FontIcon>,
      component: Link,
      to: "/blog/"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }
  return NavList;
}
export default GetNavList;
