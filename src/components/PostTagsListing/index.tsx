import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useIntl, Link } from 'gatsby-plugin-react-intl';

import { Container, TagsList } from './styles';

interface IPostTagsListingProps {
  tagsEdges: {
    node: {
      frontmatter: {
        language: string;
        tags: string[];
      };
    };
  }[];
}

interface IPostTag {
  tagName: string;
  count: number;
}

const PostTagsListing: React.FC<IPostTagsListingProps> = ({ tagsEdges }) => {
  const intl = useIntl();

  const [tags, setTags] = useState<IPostTag[]>([]);

  useEffect(() => {
    const tagsList: IPostTag[] = [];

    tagsEdges.forEach(tagEdge => {
      const tagNode = tagEdge.node.frontmatter;
      if (tagNode.language === intl.locale) {
        tagNode.tags.forEach(tag => {
          const tagIndex = tagsList.findIndex(e => e.tagName === tag);

          if (tagIndex > -1) tagsList[tagIndex].count++;
          else
            tagsList.push({
              tagName: tag,
              count: 1,
            });
        });
      }
    });

    setTags(tagsList);
  }, []);

  return (
    <Container>
      <h3>Tags</h3>
      <TagsList>
        {tags.map(({ tagName, count }) => {
          let active = false;
          let tagUrl = `/blog/tags/${_.kebabCase(tagName)}`;
          if (`/${intl.locale}${tagUrl}` === window.location.pathname) {
            active = true;
            tagUrl = `/blog`;
          }

          return (
            <Link key={tagName} to={tagUrl} className={active ? 'active' : ''}>
              {`${tagName} (${count})`}
            </Link>
          );
        })}
      </TagsList>
    </Container>
  );
};

export default PostTagsListing;
