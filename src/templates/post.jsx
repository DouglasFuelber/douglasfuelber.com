import _ from "lodash";
import React, { useState, useEffect } from "react";
import Avatar from "react-md/lib/Avatars";
import Button from "react-md/lib/Buttons";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import CardTitle from "react-md/lib/Cards/CardTitle";
import config from "../data/site-data";
import DisqusArea from "../components/Disqus";
import FontIcon from "react-md/lib/FontIcons";
import { graphql } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl"
import Helmet from "react-helmet";
import Media, { MediaOverlay } from "react-md/lib/Media";
import moment from "moment";

import Layout from "../components/Layout";
import PostTags from "../components/PostTags";
import PostCategory from "../components/PostCategory";
import PostCover from "../components/PostCover";
//import PostSuggestions from "../components/PostSuggestions";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import UserInfo from "../components/UserInfo";

import "./post.scss";

const PostTemplate = ({ pageContext, data, location }) => {

  const intl = useIntl();

  const [mobile, setMobile] = useState(true);

  const handleResize = () => {
    setMobile(window.innerWidth >= 640 ? false : true);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const { slug } = pageContext;
  const expanded = !mobile;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  const coverHeight = mobile ? 180 : 350;
  return (
    <Layout location={location}>

      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/${intl.locale}${config.blogPrefix}${post.id}`} />
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />

      <div id="post-wrapper" className="tertiary_bg">

        <div id="page_title" className="md-grid md-cell--8">
          <Link style={{ textDecoration: "none" }} to="/blog/">
            <h2 className="left-border-area light-border title">Blog</h2>
          </Link>
        </div>

        <div id="page_content">
          <div className="primary_bg card-wrapper">
            <Card className="post md-grid md-cell--8">

              <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
                <PostCover postNode={postNode} coverHeight={coverHeight} />
                <MediaOverlay>
                  <div className="md-card-title md-card-title--primary post-title">
                    <h1 className="md-card-title--title md-card-title--large md-text">{post.title}</h1>
                  </div>
                </MediaOverlay>
              </Media>

              <div className="md-grid">
                <CardTitle
                  className="post-description md-cell--6"
                  avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
                  title={`${intl.formatMessage({ id: `blog.posts.publishedIn` })} ${intl.formatDate(moment(post.date))}`}
                  subtitle={`${postNode.timeToRead} ${intl.formatMessage({ id: `blog.posts.minutesReading` })}`}>
                </CardTitle>
                <PostCategory category={post.category} />
                <CardText className="post-info md-cell--12">
                  <div className="post-body" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                </CardText>
                <CardText className="post-meta md-cell--12">
                  <PostTags tags={post.tags} center />
                  <SocialLinks
                    postPath={slug}
                    postNode={postNode}
                    mobile={mobile}
                  />
                </CardText>

              </div>
            </Card>

            <UserInfo
              className="md-grid md-cell md-cell--12"
              config={config}
              expanded={expanded} />

            <DisqusArea postNode={postNode} expanded={expanded} />

            <div className="md-grid post-back">
              <Link className="md-cell--center" to={`/blog/`}>
                <Button className="secondary-button">
                  {intl.formatMessage({ id: `blog.posts.backToBlog` })}
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/*<PostSuggestions postNode={postNode} />*/}
    </Layout>
  );

}
export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String) {
    markdownRemark(fields: { slug: { eq: $slug } }, frontmatter: {language: {eq: $language}}) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        language
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;