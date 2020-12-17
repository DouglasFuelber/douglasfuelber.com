import React, { useState, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

// import PostCategoriesListing from '../PostCategoriesListing';
// import PostTagsListing from '../PostTagsListing';
import PostPreview from '../PostPreview';

import { Container, Posts, PostsMeta } from './styles';

interface IPostListingProps {
  postsEdges: {
    node: {
      fields: {
        slug: string;
        date: Date;
      };
      excerpt: string;
      timeToRead: Number;
      frontmatter: {
        title: string;
        tags: string[];
        cover: string;
        category: string;
        language: string;
        date: Date;
      };
    };
  }[];
  categoriesEdges: {
    node: {
      frontmatter: {
        language: string;
        category: string;
      };
    };
  }[];
  tagsEdges: {
    node: {
      frontmatter: {
        language: string;
        tags: string[];
      };
    };
  }[];
}

interface IPost {
  path: string;
  tags: string[];
  cover: string;
  title: string;
  category: string;
  date: Date;
  excerpt: string;
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
        {/*
        <PostCategoriesListing
          location={location}
          categoriesEdges={categoriesEdges}
        />
        <PostTagsListing location={location} tagsEdges={tagsEdges} />
       */}
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
