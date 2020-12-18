import React, { useState, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import PostCategoriesListing from '../PostCategoriesListing';
import PostTagsListing from '../PostTagsListing';
import PostPreview from '../PostPreview';

import { Container, Posts, PostsMeta } from './styles';

interface IPostListingProps {
  postsEdges: {
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
  categoriesEdges: {
    node: {
      frontmatter: {
        language: String;
        category: String;
      };
    };
  }[];
  tagsEdges: {
    node: {
      frontmatter: {
        language: String;
        tags: String[];
      };
    };
  }[];
}

interface IPost {
  path: String;
  tags: String[];
  cover: String;
  title: String;
  category: String;
  date: Date;
  excerpt: String;
  timeToRead: Number;
}

const PostListing: React.FC<IPostListingProps> = ({
  postsEdges,
  categoriesEdges,
  tagsEdges,
}) => {
  const intl = useIntl();
  const [posts, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    const postsList: IPost[] = [];
    postsEdges.forEach(postEdge => {
      const { node } = postEdge;
      if (node.frontmatter.language === intl.locale) {
        postsList.push({
          path: node.fields.slug,
          tags: node.frontmatter.tags,
          cover: node.frontmatter.cover,
          title: node.frontmatter.title,
          category: node.frontmatter.category,
          date: node.fields.date,
          excerpt: node.excerpt,
          timeToRead: node.timeToRead,
        });
      }
    });
    setPost(postsList);
  }, []);

  return (
    <Container>
      <PostsMeta>
        <PostCategoriesListing categoriesEdges={categoriesEdges} />
        <PostTagsListing tagsEdges={tagsEdges} />
      </PostsMeta>
      <Posts>
        {posts.map((post, index) => (
          <PostPreview key={post.title} postIndex={index} post={post} />
        ))}
      </Posts>
    </Container>
  );
};

export default PostListing;
