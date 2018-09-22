import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./ContactLinks.scss";

class ContactLinks extends Component {
  getMailLink() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    
    var email = userLinks.find( obj => {
      return obj.label === "Email";
    });

    return <Button
        className="mail"
        flat={true}
        secondary
        iconClassName={email.iconClassName}
        href={email.url}>
      {email.text}
      </Button>;
  }
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
    return <div id="contact">
          <h3>Contato</h3>
          <div className="left-border-area">
            <div className="md-grid md-cell--12">
              {this.getMailLink()}
            </div>
            <div className="md-grid md-cell--12">
              {this.getSocialLinks()}
            </div>           
          </div>
        </div>;
  }
}

export default ContactLinks;
