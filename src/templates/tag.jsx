import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
      >
        <div className="tag-container">
          <Helmet>
            <title>{`Blog | Posts tagged as: ${tag} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/blog/tags/${tag}`}/>
          </Helmet>
          <div id="page_title" className="md-grid md-cell--8">
            <h1>Blog</h1>
            <h2>Posts tagged as: <span className="md-text-uppercase">{tag}</span></h2>
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
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            category
            cover
            date
          }
        }
      }
    }
  }
`;
