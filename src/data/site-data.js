module.exports = {
  siteTitle: "Douglas Fuelber", // Site title.
  siteTitleShort: "Douglas Site", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Douglas Fuelber - Full Stack Web Developer", // Alternative site title for SEO.
  siteLogo: "/logos/favicon.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.douglasfuelber.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  blogPrefix: "/blog", // Prefixes all blog links.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  recaptchaPublicKey: "6Ld3gIwUAAAAAM9ztAk0bBTf40Oe-dd_-qzv2GON", // Recaptcha public key
  siteDescription: "Douglas Fuelber - Full Stack Web Developer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-99213358-1", // Tracking code ID for google analytics.
  disqusShortName: "douglasfuelber", // Shortname used in Disqus comments component
  postDefaultCategoryID: "Programming", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  userName: "Douglas Fuelber", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userAvatar: "/images/avatar.png", // User avatar to display in the author segment.
  languageKeys: ['en', 'pt'],
  languages: [
    {
      value: 'en',
      label: 'EN'
    }, {
      value: 'pt',
      label: 'PT'
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
  userSkills: [
    {
      label: "JavaScript",
      level: 5
    },
    {
      label: "C#",
      level: 4
    },
    {
      label: "ASP.NET MVC",
      level: 4
    },
    {
      label: "ReactJS",
      level: 4
    },
    {
      label: "HTML/CSS",
      level: 5
    },
    {
      label: "Bootstrap",
      level: 5
    },
    {
      label: "SASS",
      level: 4
    },
    {
      label: "Microsoft SharePoint",
      level: 3
    },
    {
      label: "SQL",
      level: 3
    },
    {
      label: "WordPress",
      level: 5
    },
    {
      label: "PHP",
      level: 3
    },
    {
      label: "Git",
      level: 4
    },
    {
      label: "AngularJS",
      level: 4
    },
    {
      label: "Entity Framework",
      level: 3
    },
    {
      label: "LINQ",
      level: 4
    },
    {
      label: "Microsoft SQL Server",
      level: 3
    },
    {
      label: "MySQL",
      level: 3
    },
    {
      label: "Ionic Framework",
      level: 4
    },
    {
      label: "Gatsby",
      level: 4
    },
    {
      label: "Photoshop",
      level: 3
    },
    {
      label: "Corel Draw",
      level: 3
    },
    {
      label: "Node.js",
      level: 2
    }
    ,
    {
      label: "React Native",
      level: 2
    }
  ],
  userLanguages: [
    {
      key: "pt",
      level: 5
    },
    {
      key: "en",
      level: 3
    },
    {
      key: "es",
      level: 1
    }
  ],
  copyright: "Developed by Douglas Fuelber | 2019",
};