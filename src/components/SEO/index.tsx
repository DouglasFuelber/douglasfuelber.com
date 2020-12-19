import React, { useMemo } from 'react';
import urljoin from 'url-join';
import { useIntl } from 'gatsby-plugin-react-intl';
import { Helmet } from 'react-helmet';
import config from '../../data/site-data';

interface ISEOProps {
  pageLink: string;
  post?: {
    title: string;
    excerpt: string;
    cover: string;
  };
}

const SEO: React.FC<ISEOProps> = ({ pageLink, post = undefined }) => {
  const intl = useIntl();

  const blogUrl = useMemo(() => {
    let link: string = process.env.SITE_URL || '';
    if (config.defaultLanguage !== intl.locale) link += `/${intl.locale}`;
    link = `${link}${config.blogPrefix}/`;
    return link;
  }, []);

  let title;
  let description;
  let image;

  if (post) {
    title = post.title;
    description = post.excerpt;
    image = urljoin(process.env.SITE_URL || '', '/assets', post.cover);
  } else {
    title = config.siteTitle;
    description = intl.formatMessage({ id: 'site.description' });
    image = urljoin(config.siteUrl, config.siteLogo);
  }

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: process.env.SITE_URL || '',
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];

  if (post) {
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      url: process.env.SITE_URL || '',
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    });
    schemaOrgJSONLD.push({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: blogUrl,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    });
  }

  return (
    <Helmet>
      {/* General tags */}

      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={pageLink} />
      {post ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
