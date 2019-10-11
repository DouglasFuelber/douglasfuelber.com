import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import HomeLinks from "../components/HomeLinks";
import config from "../../data/SiteConfig";
import "./index.scss";

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>

          <div id="main_area">

            <div id="main_area_content">

              <div id="page_title">
                <h1>Douglas Fuelber</h1>
                <h2>Desenvolvedor Full Stack</h2>
              </div>

              <div id="page_content">
                <div id="icons_area" className="md-cell--center">
                  <HomeLinks collumnSize={4} />
                </div>
              </div>              

            </div>

          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Index;