import React, { Component } from "react";
import Disqus from 'gatsby-plugin-disqus';
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Snackbar from "react-md/lib/Snackbars";
import config from "../../../data/SiteConfig";
import "./Disqus.scss";

class DisqusArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "Novo comentário!" });
    this.setState({ toasts });
  }
  render() {
    const { postNode, expanded } = this.props;
    const post = postNode.frontmatter;
    const url = `${config.siteUrl}` + '/blog' + `${postNode.fields.slug}`;

    return (
      <Card className="comments md-grid md-cell--8">
        <CardTitle
          title="Comentários"
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
          toasts={this.state.toasts}
          onDismiss={this.onSnackbarDismiss}
        />
      </Card>
    );
  }
}

export default DisqusArea;
