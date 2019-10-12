import React from "react";
import PostCategoriesListing from "../PostCategoriesListing";
import PostPreview from "../PostPreview";
import "./PostListing.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        category: postEdge.node.frontmatter.category,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div id="posts-wrapper" className="md-grid md-grid--no-spacing md-cell--middle primary_bg">
        <div className="md-cell--3 md-cell--order-2-desktop mobile-fix">
          <PostCategoriesListing />
        </div>
        <div id="post-container" className="md-cell--9 mobile-fix">
          {postList.map(post => (
            <PostPreview key={post.title} postInfo={post} />
          ))}
        </div>        
      </div>
    );
  }
}

export default PostListing;
