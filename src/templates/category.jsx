import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostListing from "../components/PostListing";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout
        location={this.props.location}
        title={category.charAt(0).toUpperCase() + category.slice(1)}
      >
        <div className="category-container">
          <Helmet>
            <title>{`Blog | Posts in category: ${category} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/blog/categories/${category}`}/>
          </Helmet>
          <div id="page_title" className="md-grid md-cell--8">
            <h1>Blog</h1>
            <h2>Posts in category: <span className="md-text-uppercase">{category}</span></h2>
          </div>
          <div id="blog-container" className="dark_bg">
            <PostListing postEdges={postEdges} />          
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
            category
          }
        }
      }
    }
  }
`;
