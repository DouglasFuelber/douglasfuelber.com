import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import "./blog.scss";

const BlogPage = ({location, data}) => {
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout location={location} title="Blog">
        <Helmet>
            <title>{`Blog | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/blog/`} />
        </Helmet>
        <SEO postEdges={postEdges} />

        <div id="blog-container" className="tertiary_bg">
        
            <div id="page_title" className="md-grid md-cell--8">
                <h1 className="left-border-area light-border">Blog</h1>
            </div>

            <div id="page_content">
              <PostListing postEdges={postEdges} location={location} />
            </div>
        </div>

      </Layout>
    );
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