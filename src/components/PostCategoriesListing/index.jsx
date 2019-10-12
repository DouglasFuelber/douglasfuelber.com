import _ from "lodash";
import Chip from "react-md/lib/Chips";
import React from "react";
import { Link, StaticQuery } from "gatsby";
import "./PostCategoriesListing.scss";

class PostCategoriesListing extends React.Component {
  getCategoryChip(category, location) {

    var active = false;
    var categoryUrl = `/blog/categorias/${_.kebabCase(category.fieldValue)}/`;
    if (categoryUrl === location) {
        active = true;
        categoryUrl = `/blog/`;
    }        

    return (
      <Link
        key={category.fieldValue}
        style={{ textDecoration: "none" }}
        to={categoryUrl}
      >
        <Chip
          label={category.fieldValue + " (" + category.totalCount + ")"}
          className={"category-chip " + (active ? "active" : "")}
        />
      </Link>
    );
  }

  render() {
    const location = this.props.location.pathname;

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle primary_bg">
        <div id="post-container" className="md-grid md-cell--8 mobile-fix">
          <h3>Categorias</h3>
          <StaticQuery
            query={graphql`
              query CategoriesQuery {
                allMarkdownRemark {
                  group(field: frontmatter___category) {
                    fieldValue
                    totalCount
                  }
                }
              }
            `}
            render={data => (
              <div className="left-border-area light-border">
                {data.allMarkdownRemark.group.map(category =>
                  this.getCategoryChip(category, location)
                )}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PostCategoriesListing;
