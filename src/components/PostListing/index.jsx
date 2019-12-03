import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import PostCategoriesListing from "../PostCategoriesListing";
import PostTagsListing from "../PostTagsListing";
import PostPreview from "../PostPreview";

import "./PostListing.scss";

export default ({ location, postEdges, categoriesEdges, tagsEdges }) => {
  const intl = useIntl();

  const getPostList = () => {
    const postList = [];
    postEdges.forEach(postEdge => {
      const { node } = postEdge;
      if (node.frontmatter.language == intl.locale) {
        postList.push({
          path: node.fields.slug,
          tags: node.frontmatter.tags,
          cover: node.frontmatter.cover,
          title: node.frontmatter.title,
          category: node.frontmatter.category,
          date: node.fields.date,
          excerpt: node.excerpt,
          timeToRead: node.timeToRead
        });
      }
    });
    return postList;
  }

  const postList = getPostList();

  return (
    <div id="posts-wrapper" className="md-grid md-grid--no-spacing md-cell--middle primary_bg">
      <div className="md-cell--12 md-cell--3-desktop md-cell--order-2-desktop mobile-fix">
        <PostCategoriesListing location={location} categoriesEdges={categoriesEdges} />
        <PostTagsListing location={location} tagsEdges={tagsEdges} />
      </div>
      <div id="post-container" className="md-cell--12 md-cell--9-desktop mobile-fix">
        {postList.map(post => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </div>
    </div>
  );
}