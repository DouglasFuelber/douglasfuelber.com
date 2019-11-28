import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import _ from "lodash";
import moment from "moment";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import "./PostPreview.scss";

export default ({ postInfo }) => {

  const intl = useIntl();

  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => setMobile((window.innerWidth >= 640) ? false : true);

  const coverHeight = mobile ? 162 : 225;

  return (
    <Card key={postInfo.path} raise className="post md-grid md-cell md-cell--12">
      <Link style={{ textDecoration: "none" }} to={`/blog/${postInfo.path}`}>
        <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
          <PostCover postNode={postInfo} coverHeight={coverHeight} />
          <MediaOverlay>
            <CardTitle className="post-title" title={postInfo.title} />
          </MediaOverlay>
        </Media>
      </Link>
      <div className="md-grid">
        <CardTitle
          className="post-description md-cell--6"
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`${intl.formatMessage({ id: `blog.posts.publishedIn` })} ${intl.formatDate(moment(postInfo.date))}`}
          subtitle={`${postInfo.timeToRead} ${intl.formatMessage({ id: `blog.posts.minutesReading` })}`}>
        </CardTitle>
        <Link
          className="category-link md-cell--6"
          to={`/blog/categories/${_.kebabCase(postInfo.category)}`}>
          <CardTitle
            className="post-description"
            avatar={
              <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
            }
            title={intl.formatMessage({ id: `blog.posts.inCategory` })}
            subtitle={intl.formatMessage({ id: `blog.categories.${postInfo.category}` })}
          />
        </Link>
        <CardText className="post-excerpt md-cell--12 left-border-area">
          {postInfo.excerpt}
        </CardText>
      </div>
      <PostTags tags={postInfo.tags} />
      <div className="md-grid">
        <Link className="md-cell--center" style={{ textDecoration: "none" }} to={`/blog/${postInfo.path}`}>
          <Button raised primary>
            {intl.formatMessage({ id: `blog.posts.keepReading` })}
          </Button>
        </Link>
      </div>
    </Card>
  );
}