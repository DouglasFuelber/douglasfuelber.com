import React from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

export default ({ children, config, LocalTitle }) => {
  const footerLinks = LocalTitle !== "About";
  return (
    <NavigationDrawer
      drawerTitle={config.siteTitle}
      contentClassName="main-content"
      navItems={GetNavList(config.navigationLinks, config.userLinks)}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
      desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    >
      <div className="main-container">{children}</div>
      <Footer userLinks={footerLinks} />
    </NavigationDrawer>
  );
};