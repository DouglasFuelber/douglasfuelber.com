import React from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

export default ({ config: { userLinks }, labeled }) => {

  const getLinkElements = () => {
    return userLinks.map(link => (
      <Button
        icon={!labeled}
        flat={labeled}
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }

  if (!userLinks) {
    return null;
  }
  return <div className="user-links">{getLinkElements}</div>;
}