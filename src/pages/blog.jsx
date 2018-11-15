import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title="Blog">
        <Helmet>
            <title>{`Blog | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/blog/`} />
        </Helmet>
        <SEO postEdges={postEdges} />

        <div id="page_title" className="md-grid md-cell--8">
            <h1>Blog</h1>
        </div>

        <div id="blog-container" className="dark_bg">          
            <PostListing postEdges={postEdges} />          
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
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
            category
            date
          }
        }
      }
    }
  }
`;