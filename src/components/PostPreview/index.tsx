import React, { useState, useEffect, useCallback } from 'react';
import { useIntl, Link } from 'gatsby-plugin-react-intl';

import PostCategory from '../PostCategory';
import PostCover from '../PostCover';
import PostDateTime from '../PostDateTime';
import PostTags from '../PostTags';

import { Container, PostInfo, PostMeta, LinkButton, Button } from './styles';

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

interface IPostPreviewProps {
  post: IPost;
  postIndex: Number;
}

const PostPreview: React.FC<IPostPreviewProps> = ({ postIndex, post }) => {
  const intl = useIntl();
  const [coverHeight, setCoverHeight] = useState(0);

  const handleResize = useCallback(() => {
    setCoverHeight(window.innerWidth < 768 ? 125 : 200);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container postIndex={postIndex}>
      <Link to={`/blog${post.path}`}>
        <h2>{post.title}</h2>
      </Link>
      <PostCover cover={post.cover} coverHeight={coverHeight} />
      <PostInfo>
        <PostMeta postIndex={postIndex}>
          <PostCategory category={post.category} />
          <PostDateTime
            date={post.date}
            timeToRead={post.timeToRead}
            postIndex={postIndex}
          />
        </PostMeta>
        <p>{post.excerpt}</p>
        <PostTags tags={post.tags} />
      </PostInfo>
      <LinkButton to={`/blog${post.path}`}>
        <Button>{intl.formatMessage({ id: `blog.posts.keepReading` })}</Button>
      </LinkButton>
    </Container>
  );
};

export default PostPreview;
