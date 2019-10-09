import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <i className={"fa fa-home"}></i>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Sobre mim",
      leftIcon: <i className={"fa fa-id-card"}></i>,
      component: Link,
      to: "/sobre/"
    },
    {
      primaryText: "Blog",
      leftIcon: <i className={"fa fa-book"}></i>,
      component: Link,
      to: "/blog/"
    },
    {
      primaryText: "Contato",
      leftIcon: <i className={"fa fa-comments"}></i>,
      component: Link,
      to: "/contato/"
    },
    {
      divider: true
    }
  ];

  /*if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }*/
  return NavList;
}
export default GetNavList;
