module.exports = {
  siteTitle: 'Douglas Fuelber', // Site title.
  siteTitleShort: 'Douglas Site', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Douglas Fuelber - Full Stack Web Developer', // Alternative site title for SEO.
  siteLogo: '/logos/favicon.png', // Logo used for SEO and manifest.
  siteUrl: 'https://www.douglasfuelber.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  blogPrefix: '/blog', // Prefixes all blog links.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: 'Douglas Fuelber - Full Stack Web Developer', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  postDefaultCategoryID: 'Programming', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  userName: 'Douglas Fuelber', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userAvatar: '/images/avatar.png', // User avatar to display in the author segment.
  languageKeys: ['en', 'pt'],
  languages: [
    {
      value: 'en',
      label: 'EN',
    },
    {
      value: 'pt',
      label: 'PT',
    },
  ],
  defaultLanguage: 'en',
  navigationLinks: [
    {
      id: 'home',
      url: '/',
      iconClassName: 'fas fa-home',
    },
    {
      id: 'blog',
      url: '/blog/',
      iconClassName: 'fas fa-book-open',
    },
    {
      id: 'contact',
      url: '/contact/',
      iconClassName: 'fas fa-comments',
    },
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/DouglasFuelber',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/douglasfuelber',
      iconClassName: 'fab fa-linkedin',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/douglasfuelber/',
      iconClassName: 'fab fa-instagram',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/douglas.fuelber',
      iconClassName: 'fab fa-facebook-square',
    },
  ],
  userSkills: [
    { level: 5, label: 'JavaScript' },
    { level: 5, label: 'HTML / CSS' },
    { level: 4, label: 'C#' },
    { level: 4, label: '.NET (Framework/Core)' },

    { level: 4, label: 'Entity Framework' },
    { level: 4, label: 'ASP.NET MVC' },
    { level: 4, label: 'React' },
    { level: 4, label: 'Gatsby' },

    { level: 4, label: 'Git' },
    { level: 4, label: 'Azure DevOps' },
    { level: 3, label: 'Scrum' },
    { level: 3, label: 'TypeScript' },

    { level: 3, label: 'SQL' },
    { level: 3, label: 'Microsoft SQL Server' },
    { level: 2, label: 'React Native' },
    { level: 2, label: 'Node.js' },

    { level: 2, label: 'NUnit' },
    { level: 2, label: 'MySQL' },
    { level: 1, label: 'GraphQL' },
  ],
  userLanguages: [
    {
      key: 'pt',
      level: 5,
    },
    {
      key: 'en',
      level: 3,
    },
    {
      key: 'es',
      level: 2,
    },
  ],
  copyright: `Developed by Douglas Fuelber | ${new Date().getFullYear()}`,
};
