import { Home } from "../../../data/SiteContent";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import React, { Component } from "react";

import "./HomeLinks.scss";

class HomeLinks extends Component {
  render() {
    const { collumnSize } = this.props;
    return (
      <div className="links-container">
        <div className="md-grid links-wrapper">
          { Home.homeLinks.map(item => (
            <div className={"link md-cell--center md-text-center md-cell--" + `${collumnSize}`}>
              <Link to={item.link}>
                <div className="icon">
                  <FontIcon>{item.icon}</FontIcon>
                </div>
                <div className="text">
                  <h5>{item.secondaryTitle}</h5>
                  <h3>{item.primaryTitle}</h3>
                </div>              
              </Link>
            </div>  
          )) }
        </div>
      </div>
    );
  }
}

export default HomeLinks;