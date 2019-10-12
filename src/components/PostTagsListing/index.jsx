import _ from "lodash";
import Chip from "react-md/lib/Chips";
import React from "react";
import { Link, StaticQuery } from "gatsby";
import "./PostTagsListing.scss";

class PostTagsListing extends React.Component {
  getTagChip(tag, location) {

    var active = false;
    var tagUrl = `/blog/tags/${_.kebabCase(tag.fieldValue)}`;
    if (tagUrl === location) {
        active = true;
        tagUrl = `/blog`;
    }        

    return (
      <Link
        key={tag.fieldValue}
        style={{ textDecoration: "none" }}
        to={tagUrl}
      >
        <Chip
          label={tag.fieldValue + " (" + tag.totalCount + ")"}
          className={"tag-chip " + (active ? "active" : "")}
        />
      </Link>
    );
  }

  render() {
    const location = this.props.location.pathname;

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle primary_bg">
        <div id="post-container" className="md-grid md-cell--8 mobile-fix">
          <h3>Tags</h3>
          <StaticQuery
            query={graphql`
              query TagsQuery {
                allMarkdownRemark {
                  group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                  }
                }
              }
            `}
            render={data => (
              <div className="left-border-area light-border">
                {data.allMarkdownRemark.group.map(tag =>
                  this.getTagChip(tag, location)
                )}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PostTagsListing;
