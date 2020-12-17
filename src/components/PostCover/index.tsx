import React from 'react';
import Img from 'gatsby-image';
import path from 'path';
import { StaticQuery, graphql } from 'gatsby';

interface IPostCoverProps {
  cover: string;
  coverHeight: Number;
}

const PostCover: React.FC<IPostCoverProps> = ({ cover, coverHeight }) => {
  return (
    <StaticQuery
      query={graphql`
        query CoverQuery {
          allFile {
            edges {
              node {
                id
                absolutePath
                childImageSharp {
                  id
                  resolutions {
                    base64
                    tracedSVG
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    originalName
                  }
                  internal {
                    contentDigest
                    type
                    owner
                  }
                  fluid(maxWidth: 1240) {
                    ...GatsbyImageSharpFluid
                    originalName
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const coverNodeList = data.allFile.edges.filter(
          (fileNode: {
            node: { childImageSharp: null; absolutePath: string | string[] };
          }) => {
            if (fileNode.node.childImageSharp === null) return false;

            if (
              fileNode.node.absolutePath.indexOf(
                path.join('/static/assets/', cover),
              ) !== -1
            )
              return true;

            return false;
          },
        );

        if (coverNodeList.length === 1) {
          return (
            <Img
              fluid={coverNodeList[0].node.childImageSharp.fluid}
              style={{ height: coverHeight, width: '100%' }}
            />
          );
        }

        /* eslint no-undef: "off" */
        const coverURL =
          cover.substring(0, 1) === '/' ? __PATH_PREFIX__ + cover : cover;
        return (
          <div
            style={{
              backgroundImage: `url(${coverURL})`,
              height: `${coverHeight}px`,
            }}
          />
        );
      }}
    />
  );
};

export default PostCover;
