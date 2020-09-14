import React from 'react';
import { useIntl, Link } from "gatsby-plugin-react-intl";
import CardTitle from "react-md/lib/Cards/CardTitle";
import _ from "lodash";

import "./PostCategory.scss";

export default ({ category }) => {
    const intl = useIntl();

    return <Link
        className="category-link"
        to={`/blog/categories/${_.kebabCase(category)}`}>
        <CardTitle
            className="post-category"
            avatar={<i className="fas fa-archive post-category-icon" />}
            title={intl.formatMessage({ id: `blog.posts.inCategory` })}
            subtitle={intl.formatMessage({ id: `blog.categories.${category}` })}
        />
    </Link>
}
