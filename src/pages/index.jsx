import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import { graphql } from "gatsby";
import Layout from "../layout";
import About from "../components/About";
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

          <div id="main_banner">
            <div id="page_title">
              <h1>Douglas Fuelber</h1>
              <h2>Desenvolvedor Full Stack</h2>
            </div>
          </div>

          <Link
                className="scroll-down"
                to="main_area"
                data-offset="-45"
                spy
                smooth
                duration={500}
              >
              
              <i className="material-icons">keyboard_arrow_down</i>
              </Link>

          <div id="main_area" className="secondary_bg">
            <About/>
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
