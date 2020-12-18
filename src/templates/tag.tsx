import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from '../components/PageTitle';
import PostListing from '../components/PostListing';
import Layout from '../components/Layout';

import { Container } from '../pages/blog-styles';

interface IBlogTagPageProps {
  pageContext: {
    tag: String;
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

const TagTemplate: React.FC<IBlogTagPageProps> = ({
  data: { posts, categories, tags },
  pageContext,
}) => {
  const { tag } = pageContext;

  return (
    <Layout
      pageTitle={`Blog | Tag: ${tag}`}
      pageRelativeUrl={`blog/tags/${tag}`}
    >
      <PageTitle title="Blog" subtitle={`Tag: ${tag}`} />
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

export default TagTemplate;

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
