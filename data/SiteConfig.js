module.exports = {
  siteTitle: "Douglas Fuelber - Developer", // Site title.
  siteTitleShort: "Douglas Fuelber", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Douglas Fuelber - Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.douglasfuelber.com", // Domain of your website without pathPrefix.
  pathPrefix: "/site", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Douglas Fuelber - Bacharel em Ciência da Computação pela Unisc e programador na empresa Conectt", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Dev", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Douglas Fuelber", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Brasil", // User location to display in the author segment.
  userAvatar: "https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/30713004_1522740204502520_2647134068470185984_n.jpg?_nc_cat=0&oh=ce24a65e4743d07697af4121f44497eb&oe=5C26A9CE", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
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
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Douglas Fuelber" // Copyright string for the footer of the website and RSS feed.
};
