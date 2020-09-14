import React from 'react';
import { useIntl } from "gatsby-plugin-react-intl";
import CardTitle from "react-md/lib/Cards/CardTitle";
import moment from "moment";
import _ from "lodash";

import "./PostDateTime.scss";

export default ({ date, timeToRead }) => {
    const intl = useIntl();

    return <CardTitle
        className="post-datetime"
        avatar={<i className="fas fa-calendar-alt post-datetime-icon" />}
        title={`${intl.formatMessage({ id: `blog.posts.publishedIn` })} ${intl.formatDate(moment(date))}`}
        subtitle={`${timeToRead} ${intl.formatMessage({ id: `blog.posts.minutesReading` })}`}>
    </CardTitle>
}
