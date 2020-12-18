import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useIntl, Link } from 'gatsby-plugin-react-intl';

import { Container, CategoriesList } from './styles';

interface IPostCategoriesListingProps {
  categoriesEdges: {
    node: {
      frontmatter: {
        language: string;
        category: string;
      };
    };
  }[];
}

interface IPostCategory {
  categoryName: string;
  count: number;
}

const PostCategoriesListing: React.FC<IPostCategoriesListingProps> = ({
  categoriesEdges,
}) => {
  const intl = useIntl();

  const [categories, setCategories] = useState<IPostCategory[]>([]);

  useEffect(() => {
    const categoriesList: IPostCategory[] = [];

    categoriesEdges.forEach(categoryEdge => {
      const category = categoryEdge.node.frontmatter;
      if (category.language === intl.locale) {
        const categoryIndex = categoriesList.findIndex(
          e => e.categoryName === category.category,
        );

        if (categoryIndex > -1) categoriesList[categoryIndex].count++;
        else
          categoriesList.push({
            categoryName: category.category,
            count: 1,
          });
      }
    });

    setCategories(categoriesList);
  }, []);

  return (
    <Container>
      <h3>{intl.formatMessage({ id: 'blog.categories.categories' })}</h3>
      <CategoriesList>
        {categories.map(({ categoryName, count }) => {
          let active = false;
          let categoryUrl = `/blog/categories/${_.kebabCase(categoryName)}`;
          if (`/${intl.locale}${categoryUrl}` === window.location.pathname) {
            active = true;
            categoryUrl = `/blog`;
          }

          return (
            <Link
              key={categoryName}
              to={categoryUrl}
              className={active ? 'active' : ''}
            >
              {`${intl.formatMessage({
                id: `blog.categories.${categoryName}`,
              })} (${count})`}
            </Link>
          );
        })}
      </CategoriesList>
    </Container>
  );
};

export default PostCategoriesListing;
