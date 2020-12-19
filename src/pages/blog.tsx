import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PostListing from '../components/PostListing';

import { Container } from '../styles/blog-styles';

interface IBlogPageProps {
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

const BlogPage: React.FC<IBlogPageProps> = ({
  data: { posts, categories, tags },
}) => (
  <Layout pageTitle="Blog" pageRelativeUrl="blog">
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

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
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
