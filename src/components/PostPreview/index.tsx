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
  featured?: boolean;
}

const PostPreview: React.FC<IPostPreviewProps> = ({ featured, post }) => {
  const intl = useIntl();
  const [coverHeight, setCoverHeight] = useState(0);

  const handleResize = useCallback(() => {
    setCoverHeight(window.innerWidth < 768 ? 162 : 225);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container isFeatured={featured}>
      <Link style={{ textDecoration: 'none' }} to={`/blog/${post.path}`}>
        <h2>{post.title}</h2>
      </Link>
      {/* <PostCover postNode={postInfo} coverHeight={coverHeight} />
      <PostMeta>
        <PostCategory category={postInfo.category} />
        <PostDateTime date={postInfo.date} timeToRead={postInfo.timeToRead} />
        {postInfo.excerpt}
        <PostTags tags={postInfo.tags} />
        <Link style={{ textDecoration: "none" }} to={`/blog/${postInfo.path}`}>
          <Button>
            {intl.formatMessage({ id: `blog.posts.keepReading` })}
          </Button>
        </Link>
      </PostMeta> */}
    </Container>
  );
};

export default PostPreview;
