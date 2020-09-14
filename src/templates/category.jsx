import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import PageTitle from '../components/PageTitle';
import PostListing from '../components/PostListing';
import Layout from '../components/Layout';
import config from '../data/site-data';

const CategoryTemplate = ({
  pageContext,
  data: { posts, categories, tags },
  location,
}) => {
  const { category } = pageContext;
  const postEdges = posts.edges;
  const intl = useIntl();

  return (
    <Layout
      location={location}
      title={category.charAt(0).toUpperCase() + category.slice(1)}
    >
      <Helmet>
        <title>
          {`Blog | ${intl.formatMessage({
            id: `blog.categories.category`,
          })}: ${category} | ${config.siteTitle}`}
        </title>
        <link
          rel="canonical"
          href={`${config.siteUrl}/${intl.locale}/blog/categories/${category}`}
        />
      </Helmet>

      <div id="blog-container" className="tertiary_bg">
        <PageTitle
          title="Blog"
          subtitle1={intl.formatMessage({ id: `blog.categories.category` })}
          subtitle2={intl.formatMessage({ id: `blog.categories.${category}` })}
        />

        <div id="page_content">
          <PostListing
            postEdges={postEdges}
            categoriesEdges={categories.edges}
            tagsEdges={tags.edges}
            location={location}
          />
        </div>
      </div>
    </Layout>
  );
};

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
