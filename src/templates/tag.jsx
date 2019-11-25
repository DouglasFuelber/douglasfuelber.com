import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.posts.edges;
    const categories = this.props.data.categories;
    const tags = this.props.data.tags;

    return (
      <Layout
        location={this.props.location}
        title={tag.charAt(0).toUpperCase() + tag.slice(1)}
      >
        <Helmet>
          <title>{`Blog | Tag: ${tag} | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/blog/tags/${tag}`}/>
        </Helmet>

        <div id="blog-container" className="tertiary_bg">

          <div id="page_title" className="md-grid md-cell--8">
            <Link style={{ textDecoration: "none" }} to="/blog/">
              <h1 className="left-border-area light-border">Blog</h1>
            </Link>
            <h2>Tag: <span className="md-text-uppercase">{tag}</span></h2>
          </div>

          <div id="page_content">
            <PostListing postEdges={postEdges} categoriesEdges={categories.edges} tagsEdges={tags.edges} location={this.props.location} />  
          </div>
                    
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    posts: allMarkdownRemark(
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
    categories: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            language
            category
          }
        }
      }
    }
    tags: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            language
            tags
          }
        }
      }
    }
  }
`;
