import React, { useEffect, useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-react-intl';

import Layout from '../components/Layout';
import DisqusArea from '../components/Disqus';
import PageTitle from '../components/PageTitle';
import PostCover from '../components/PostCover';
import PostCategory from '../components/PostCategory';
import PostDateTime from '../components/PostDateTime';
import PostTags from '../components/PostTags';
import Sharer from '../components/Sharer';

import {
  Container,
  PostMeta,
  PostBody,
  LinkButton,
  Button,
} from './post-styles';

interface IBlogPostPageProps {
  data: {
    markdownRemark: {
      html: string;
      timeToRead: Number;
      excerpt: string;
      frontmatter: {
        title: string;
        cover: string;
        date: Date;
        language: String;
        category: String;
        tags: String[];
      };
      fields: {
        slug: String;
        date: Date;
      };
    };
  };
}

const PostTemplate: React.FC<IBlogPostPageProps> = ({
  data: { markdownRemark: postNode },
}) => {
  const intl = useIntl();

  const post = postNode.frontmatter;
  const [coverHeight, setCoverHeight] = useState(0);

  const handleResize = useCallback(() => {
    setCoverHeight(window.innerWidth < 768 ? 160 : 240);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout
      pageTitle={post.title}
      pageRelativeUrl={`blog${postNode.fields.slug}`}
      post={{ title: post.title, excerpt: postNode.excerpt, cover: post.cover }}
    >
      <Container>
        <PageTitle title={post.title} />
        <PostCover cover={post.cover} coverHeight={coverHeight} />
        <PostMeta postIndex={0}>
          <PostCategory category={post.category} />
          <PostDateTime
            date={post.date}
            timeToRead={postNode.timeToRead}
            postIndex={0}
          />
        </PostMeta>
        <PostBody dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <PostMeta postIndex={0}>
          <PostTags tags={post.tags} />
        </PostMeta>
        <Sharer
          postTitle={post.title}
          postUrl={`blog${postNode.fields.slug}`}
        />
        <DisqusArea
          postTitle={post.title}
          postUrl={`blog${postNode.fields.slug}`}
        />
        <LinkButton to="/blog/">
          <Button className="secondary-button">
            {intl.formatMessage({ id: `blog.posts.backToBlog` })}
          </Button>
        </LinkButton>
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { language: { eq: $language } }
    ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        language
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
