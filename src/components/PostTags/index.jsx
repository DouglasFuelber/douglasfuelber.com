import React from "react";
import _ from "lodash";
import { Link } from "gatsby-plugin-intl";
import Chip from "react-md/lib/Chips";
import "./PostTags.scss";

export default ({ tags }) => {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map(tag => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/blog/tags/${_.kebabCase(tag)}`}
          >
            <Chip label={tag} className="post-preview-tags" />
          </Link>
        ))}
    </div>
  );
}