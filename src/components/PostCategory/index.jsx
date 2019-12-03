import React from 'react';
import { useIntl, Link } from "gatsby-plugin-intl";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import _ from "lodash";

import "./PostCategory.scss";

export default ({ category }) => {
    const intl = useIntl();

    return <Link
        className="category-link md-cell--6"
        to={`/blog/categories/${_.kebabCase(category)}`}>
        <CardTitle
            className="post-category"
            avatar={
                <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
            }
            title={intl.formatMessage({ id: `blog.posts.inCategory` })}
            subtitle={intl.formatMessage({ id: `blog.categories.${category}` })}
        />
    </Link>
}