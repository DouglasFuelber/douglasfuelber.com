import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { useIntl, Link } from 'gatsby-plugin-react-intl';
import _ from 'lodash';

import { Container } from './styles';

interface IPostCategoryProps {
  category: String;
}

const PostCategory: React.FC<IPostCategoryProps> = ({ category }) => {
  const intl = useIntl();

  return (
    <Container>
      <Link to={`/blog/categories/${_.kebabCase(category)}`}>
        <FaArchive />
        {intl.formatMessage({ id: `blog.categories.${category}` })}
      </Link>
    </Container>
  );
};

export default PostCategory;
