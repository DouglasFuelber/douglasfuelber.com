import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./ContactLinks.scss";

class ContactLinks extends Component {
    getSocialLinks() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;

    var filteredUserLinks = userLinks.filter( obj => {
      return obj.label != "Email";
    });

    return filteredUserLinks.map(link => (
      <Button
        icon={!labeled}
        flat={labeled}
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
        title={link.label}
        rel="noopener"
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="contact-links-container mobile-fix">
            <div className="contact-links-wrapper md-cell--center">
              <div className="md-cell--center md-cell--middle md-cell--12">
                <div className="left-border-area light-border">
                  {this.getSocialLinks()}
                </div>
              </div>
            </div>
          </div>;
  }
}

export default ContactLinks;
