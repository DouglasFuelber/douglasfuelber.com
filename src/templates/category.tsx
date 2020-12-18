import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';
import PageTitle from '../components/PageTitle';
import PostListing from '../components/PostListing';
import Layout from '../components/Layout';

import { Container } from '../pages/blog-styles';

interface IBlogCategoryPageProps {
  pageContext: {
    category: String;
  };
  data: {
    posts: {
      edges: {
        node: {
          fields: {
            slug: String;
            date: Date;
          };
          excerpt: String;
          timeToRead: Number;
          frontmatter: {
            title: String;
            tags: String[];
            cover: String;
            category: String;
            language: String;
            date: Date;
          };
        };
      }[];
    };
    categories: {
      edges: {
        node: {
          frontmatter: {
            language: String;
            category: String;
          };
        };
      }[];
    };
    tags: {
      edges: {
        node: {
          frontmatter: {
            language: String;
            tags: String[];
          };
        };
      }[];
    };
  };
}

const CategoryTemplate: React.FC<IBlogCategoryPageProps> = ({
  data: { posts, categories, tags },
  pageContext,
}) => {
  const { category } = pageContext;
  const intl = useIntl();

  return (
    <Layout
      pageTitle={`Blog | ${intl.formatMessage({
        id: `blog.categories.category`,
      })}: ${category}`}
      pageRelativeUrl={`blog/categories/${category}`}
    >
      <PageTitle title="Blog" />
      <Container>
        <PostListing
          postsEdges={posts.edges}
          categoriesEdges={categories.edges}
          tagsEdges={tags.edges}
        />
      </Container>
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
