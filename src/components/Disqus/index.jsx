import React, { useState } from "react";
import Disqus from 'gatsby-plugin-disqus';
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import { useIntl } from "gatsby-plugin-intl"
import FontIcon from "react-md/lib/FontIcons";
import Snackbar from "react-md/lib/Snackbars";
import config from "../../../data/SiteConfig";
import "./Disqus.scss";

const DisqusArea = ({ postNode, expanded }) => {
  const intl = useIntl();
  const [toasts, setToast] = useState([]);

  const onSnackbarDismiss = () => {
    const [, ...toasts] = toasts;
    setToast(toasts);
  }

  const notifyAboutComment = () => {
    const toasts = toasts.slice();
    toasts.push({ text: `${intl.formatMessage({ id: `blog.posts.newComment` })}!` });
    setToast(toasts);
  }

  const post = postNode.frontmatter;
  const url = `${config.siteUrl}/blog${postNode.fields.slug}`;

  return (
    <Card className="comments md-grid md-cell--8">
      <CardTitle
        title={intl.formatMessage({ id: `blog.posts.comments` })}
        avatar={<Avatar icon={<FontIcon>comment</FontIcon>} />}
        expander={!expanded}
      />
      <CardText expandable={!expanded}>
        <Disqus
          identifier={post.title}
          title={post.title}
          url={url}
        />
      </CardText>
      <Snackbar
        toasts={toasts}
        onDismiss={onSnackbarDismiss}
      />
    </Card>
  );
}

export default DisqusArea;