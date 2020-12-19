import React, { useMemo } from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import config from '../../data/site-data';

import { Container } from './styles';

interface ISharerProps {
  postTitle: string;
  postExcerpt?: string;
  postUrl: string;
}

const Sharer: React.FC<ISharerProps> = ({
  postTitle,
  postExcerpt = '',
  postUrl,
}) => {
  const intl = useIntl();
  const iconSize = 36;
  const separator = ' | ';

  const postFullUrl = useMemo(() => {
    let url: string = process.env.SITE_URL || '';
    if (config.defaultLanguage !== intl.locale) url += `/${intl.locale}`;
    url += `/${postUrl}`;

    return url;
  }, []);

  return (
    <Container>
      <LinkedinShareButton
        url={postFullUrl}
        title={postTitle}
        summary={postExcerpt}
        source={config.siteTitle}
      >
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <FacebookShareButton url={postFullUrl} quote={postExcerpt}>
        <FacebookIcon round size={iconSize} />
      </FacebookShareButton>
      <TwitterShareButton url={postFullUrl} title={postTitle}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <WhatsappShareButton
        url={postFullUrl}
        title={postTitle}
        separator={separator}
      >
        <WhatsappIcon round size={iconSize} />
      </WhatsappShareButton>
      <TelegramShareButton url={postFullUrl} title={postTitle}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
      <EmailShareButton
        url={postFullUrl}
        subject={postTitle}
        body={postExcerpt}
        separator={separator}
      >
        <EmailIcon round size={iconSize} />
      </EmailShareButton>
    </Container>
  );
};

export default Sharer;
