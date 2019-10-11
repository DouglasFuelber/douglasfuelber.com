import React from "react";
import _ from "lodash";
import { Link, StaticQuery } from "gatsby";

class PostCategoriesListing extends React.Component {
  render() {
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle primary_bg">
        <div id="post-container" className="md-grid md-cell--8 mobile-fix">
            <h1>Categorias</h1>
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
                    <ul>
                        {data.allMarkdownRemark.group.map(category => (
                        <li key={category.fieldValue}>
                            <Link to={`/blog/categorias/${_.kebabCase(category.fieldValue)}/`}>
                            {category.fieldValue} ({category.totalCount})
                            </Link>
                        </li>
                        ))}
                    </ul>
                )}
            />            
        </div>
      </div>
    );
  }
}

export default PostCategoriesListing;
