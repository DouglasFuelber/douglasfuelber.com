import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import config from "../../../data/SiteConfig";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <div className="post-info">
        <CardTitle
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Publicado em ${moment(postNode.fields.date).format(
            config.dateFormat
          )}`}
          subtitle={`${postNode.timeToRead} minutos de leitura`}
        />
        <Link
          className="category-link"
          to={`/categorias/${_.kebabCase(post.category)}`}
        >
          <CardTitle
            avatar={
              <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
            }
            title="Na categoria"
            subtitle={post.category}
          />
        </Link>
      </div>
    );
  }
}

export default PostInfo;
