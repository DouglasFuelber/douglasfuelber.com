import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import LanguageSelector from '../LanguageSelector';
import GetNavList from './NavList';
import './Navigation.scss';

export default ({ children, config, LocalTitle }) => {
  return (
    <NavigationDrawer
      drawerTitle={config.siteTitle}
      contentClassName="main-content"
      navItems={GetNavList(config.navigationLinks, config.userLinks)}
      mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
      tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
      desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    >
      <LanguageSelector />
    </NavigationDrawer>
  );
};
