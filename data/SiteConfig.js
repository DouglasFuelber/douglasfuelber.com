module.exports = {
  siteTitle: "Douglas Fuelber", // Site title.
  siteTitleShort: "Douglas Site", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Douglas Fuelber - Full Stack Developer", // Alternative site title for SEO.
  siteLogo: "/logos/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.douglasfuelber.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  blogPrefix: "/blog", // Prefixes all blog links.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  recaptchaPublicKey: "6Ld3gIwUAAAAAM9ztAk0bBTf40Oe-dd_-qzv2GON", // Recaptcha public key
  siteDescription: "Douglas Fuelber - Bachelor in Computer Science at Unisc and full stack developer at Conectt.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-99213358-1", // Tracking code ID for google analytics.
  disqusShortName: "douglasfuelber", // Shortname used in Disqus comments component
  postDefaultCategoryID: "Programming", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Douglas Fuelber", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Brazil", // User location to display in the author segment.
  userAvatar: "/images/avatar.jpg", // User avatar to display in the author segment.
  userDescription:
  "As a programmer, I like to learn new technologies and languages, trying not to limit myself in just improving the knowledge I have already acquired. Also, I really like movies, series, to practice sports and getting to know new places.", // User description to display in the author segment.
  languageKeys: ['en', 'pt'],
  languages: [
    {
      value: 'en',
      label: 'English'
    }, {
      value: 'pt',
      label: 'Português'
    }
  ],
  defaultLanguage: 'en',
  navigationLinks: [
    {
      id: "home",
      url: "/",
      iconClassName: "fas fa-home"
    },
    {
      id: "about",
      url: "/about/",
      iconClassName: "fas fa-id-card"
    },
    {
      id: "blog",
      url: "/blog/",
      iconClassName: "fas fa-book-open"
    },
    {
      id: "contact",
      url: "/contact/",
      iconClassName: "fas fa-comments"
    },
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/DouglasFuelber",
      iconClassName: "fab fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/douglasfuelber",
      iconClassName: "fab fa-linkedin"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/douglasfuelber/",
      iconClassName: "fab fa-instagram"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/douglas.fuelber",
      iconClassName: "fab fa-facebook-square"
    }
  ],
  copyright: "Developed by Douglas Fuelber | 2019",
};