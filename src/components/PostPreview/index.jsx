import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import CardText from "react-md/lib/Cards/CardText";
import _ from "lodash";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostCategory from "../PostCategory";
import PostCover from "../PostCover";
import PostDateTime from "../PostDateTime";
import PostTags from "../PostTags";
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
    <Card key={postInfo.path} className="post md-grid md-cell--12">
      <Link style={{ textDecoration: "none" }} to={`/blog/${postInfo.path}`}>
        <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
          <PostCover postNode={postInfo} coverHeight={coverHeight} />
          <MediaOverlay>
            <CardTitle className="post-title" title={postInfo.title} />
          </MediaOverlay>
        </Media>
      </Link>
      <div className="md-grid">
        <PostDateTime date={postInfo.date} timeToRead={postInfo.timeToRead}/>
        <PostCategory category={postInfo.category}/>
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