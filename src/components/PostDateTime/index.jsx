import React from 'react';
import { useIntl } from "gatsby-plugin-intl";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import moment from "moment";
import _ from "lodash";

import "./PostDateTime.scss";

export default ({ date, timeToRead }) => {
    const intl = useIntl();

    return <CardTitle
        className="post-datetime"
        avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
        title={`${intl.formatMessage({ id: `blog.posts.publishedIn` })} ${intl.formatDate(moment(date))}`}
        subtitle={`${timeToRead} ${intl.formatMessage({ id: `blog.posts.minutesReading` })}`}>
    </CardTitle>
}