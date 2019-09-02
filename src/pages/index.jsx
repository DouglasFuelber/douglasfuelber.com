import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import FontIcon from "react-md/lib/FontIcons";
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

          <div id="main_area">

            <div id="page_title">
              <h1>Douglas Fuelber</h1>
              <h2>Desenvolvedor Full Stack</h2>
            </div>

            <div id="icons_area" className="md-cell--center">
              <div className="md-grid">
                <div className="md-cell--center md-cell--4 md-text-center">
                  <Link
                    className=""
                    to={`/sobre/`}
                  >
                    <FontIcon>emoji_people</FontIcon>
                    <h5>Conheça mais</h5>
                    <h3>Sobre mim</h3>
                  </Link>
                </div>
                <div className="md-cell--center md-cell--4 md-text-center">
                  <Link
                      className=""
                      to={`/blog/`}
                    >
                    <FontIcon>library_books</FontIcon>
                    <h5>Leia meu</h5>
                    <h3>Blog</h3>
                  </Link>
                </div>
                <div className="md-cell--center md-cell--4 md-text-center">
                  <Link
                      className=""
                      to={`/contato/`}
                    >
                    <FontIcon>forum</FontIcon>
                    <h5>Entre em</h5>
                    <h3>Contato</h3>
                  </Link>
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
