import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl";
import PostListing from "../components/PostListing";
import Layout from "../components/Layout";
import config from "../../data/SiteConfig";

const CategoryTemplate = ({pageContext, data: { posts, categories, tags}, location}) => {
  const { category } = pageContext;
  const postEdges = posts.edges;
  const intl = useIntl();

  return (
    <Layout
      location={location}
      title={category.charAt(0).toUpperCase() + category.slice(1)}
    >
      <Helmet>
        <title>{`Blog | ${intl.formatMessage({ id: `blog.categories.category` })}: ${category} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}/blog/categories/${category}`}/>
      </Helmet>

      <div id="blog-container" className="tertiary_bg">

        <div id="page_title" className="md-grid md-cell--8">
          <Link style={{ textDecoration: "none" }} to="/blog/">
            <h1 className="left-border-area light-border">Blog</h1>
          </Link>
          <h2>{intl.formatMessage({ id: `blog.categories.category` })}: <span className="md-text-uppercase">{category}</span></h2>
        </div>

        <div id="page_content">
          <PostListing postEdges={postEdges} categoriesEdges={categories.edges} tagsEdges={tags.edges} location={location} /> 
        </div>
                    
      </div>
    </Layout>
  );
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    posts: allMarkdownRemark(
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
            category
            language
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
