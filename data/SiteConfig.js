module.exports = {
  siteTitle: "Douglas Fuelber", // Site title.
  siteTitleShort: "Douglas Dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Douglas Fuelber - Full Stack Developer", // Alternative site title for SEO.
  siteLogo: "/logos/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.douglasfuelber.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Douglas Fuelber - Bachelor in Computer Science at Unisc and full stack developer at Conectt.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-99213358-1", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Programming", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Douglas Fuelber", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Brazil", // User location to display in the author segment.
  userAvatar: "/images/avatar.jpg", // User avatar to display in the author segment.
  userDescription:
  "As a programmer, I like to learn new technologies and languages, trying not to limit myself in just improving the knowledge I have already acquired. Also, I really like movies, series, to practice sports and getting to know new places.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/douglasfuelber",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/douglasfuelber/",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/douglas.fuelber",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Email",
      url: "mailto:contato@douglasfuelber.com",
      text: "contato@douglasfuelber.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Developed by Douglas Fuelber | 2019" // Copyright string for the footer of the website and RSS feed.
};
