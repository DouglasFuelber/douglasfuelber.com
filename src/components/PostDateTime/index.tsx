import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import moment from 'moment';

import { Container } from './styles';

interface IPostDateTimeProps {
  date: Date;
  timeToRead: Number;
  postIndex: Number;
}

const PostDateTime: React.FC<IPostDateTimeProps> = ({
  date,
  timeToRead,
  postIndex,
}) => {
  const intl = useIntl();

  return (
    <Container postIndex={postIndex}>
      <div>
        <FaRegCalendarAlt />
        {`${intl.formatMessage({
          id: `blog.posts.publishedIn`,
        })} ${intl.formatDate(moment(date), {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}`}
      </div>
      <div>
        <FaRegClock />
        {`${timeToRead} ${intl.formatMessage({
          id: `blog.posts.minutesReading`,
        })}`}
      </div>
    </Container>
  );
};

export default PostDateTime;
