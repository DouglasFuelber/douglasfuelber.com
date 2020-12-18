import React from 'react';
import _ from 'lodash';
import { Link } from 'gatsby-plugin-react-intl';
import { FaTags } from 'react-icons/fa';

import { Container } from './styles';

interface IPostTagsProps {
  tags: String[];
}

const PostTags: React.FC<IPostTagsProps> = ({ tags }) => {
  return (
    <Container>
      <FaTags />
      {tags &&
        tags.map(tag => (
          <Link key={tag} to={`/blog/tags/${_.kebabCase(tag)}`}>
            {tag}
          </Link>
        ))}
    </Container>
  );
};

export default PostTags;
