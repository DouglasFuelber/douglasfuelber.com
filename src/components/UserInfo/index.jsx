import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import { useIntl } from "gatsby-plugin-intl"
import IconSeparator from "react-md/lib/Helpers/IconSeparator";
import UserLinks from "../UserLinks";
import "./UserInfo.scss";

export default ({ config, expanded }) => {
  const intl = useIntl();
  const { userAvatar, userName, userLinks } = config;

  const userLinksElement = (
    <UserLinks config={config} />
  );

  if (!userAvatar && !userName) {
    if (userLinks) {
      return (
        <Card className="md-grid md-cell--8 user-info">
          {userLinksElement}
        </Card>
      );
    }
    return null;
  }

  return (
    <Card className="md-grid md-cell--8 user-info">
      <CardTitle
        expander={!expanded}
        avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
        title={userName && userName}
      />
      <CardText expandable={!expanded}>
        {intl.formatMessage({ id: `site.userLocation` }) && (
          <IconSeparator label={intl.formatMessage({ id: `site.userLocation` })} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
        )}
        <p>{intl.formatMessage({ id: `site.userDescription` }) && intl.formatMessage({ id: `site.userDescription` })}</p>
        {userLinksElement}
      </CardText>
    </Card>
  );
}