import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import _ from "lodash";
import moment from "moment";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags";
import PostCover from "../PostCover";
import config from "../../../data/SiteConfig";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path} raise className="post md-grid md-cell md-cell--12">
        <Link style={{ textDecoration: "none" }} to={`blog/${postInfo.path}`}>
          <Media style={{ height: coverHeight, paddingBottom: "0px" }}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <MediaOverlay>
              <CardTitle className="post-title" title={postInfo.title}/>
            </MediaOverlay>
          </Media>
        </Link>
        <div className="md-grid">
          <CardTitle
            className="post-description md-cell--6"
            avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
            title={`Publicado em ${moment(postInfo.date).format(
              config.dateFormat
            )}`}
            subtitle={`${postInfo.timeToRead} minutos de leitura`}>
          </CardTitle>
          <Link
              className="category-link md-cell--6"
              to={`/blog/categorias/${_.kebabCase(postInfo.category)}`}>
              <CardTitle
                className="post-description"
                avatar={
                  <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
                }
                title="Na categoria"
                subtitle={postInfo.category}
              />
          </Link>
          <CardText className="post-excerpt md-cell--12 left-border-area">
            {postInfo.excerpt}
          </CardText>
        </div>        
        <PostTags tags={postInfo.tags} />
        <div className="md-grid">
          <Link className="md-cell--center" style={{ textDecoration: "none" }} to={`blog/${postInfo.path}`}>
            <Button raised primary>
              Continuar lendo
            </Button>
          </Link>          
        </div>
      </Card>
    );
  }
}

export default PostPreview;
