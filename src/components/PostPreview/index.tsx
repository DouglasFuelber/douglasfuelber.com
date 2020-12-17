import React, { useState, useEffect, useCallback } from 'react';
import { useIntl, Link } from 'gatsby-plugin-react-intl';

import PostCategory from '../PostCategory';
import PostCover from '../PostCover';
import PostDateTime from '../PostDateTime';
import PostTags from '../PostTags';

import { Container, PostMeta, Button } from './styles';

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

interface IPostPreviewProps {
  post: IPost;
  postIndex: number;
}

const PostPreview: React.FC<IPostPreviewProps> = ({ postIndex, post }) => {
  // const intl = useIntl();
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
      {/* <PostMeta>
        <PostCategory category={postInfo.category} />
        <PostDateTime date={postInfo.date} timeToRead={postInfo.timeToRead} />
        {postInfo.excerpt}
        <PostTags tags={postInfo.tags} />
        <Link to={`/blog${post.path}`}>
          <Button>
            {intl.formatMessage({ id: `blog.posts.keepReading` })}
          </Button>
        </Link>
      </PostMeta> */}
    </Container>
  );
};

export default PostPreview;
