/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Chris Vo | Software Engineer`,
    name: `Chris Vo`,
    siteURL: `https://chrisvo.dev/`,
    linkedInURL: `https://www.linkedin.com/in/chris-vo-/`,
    githubURL: `https://github.com/VoChrisK`,
    angellistURL: `https://angel.co/chris-vo-3`
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `assets/images/favicon.png`
      }
    }
  ]
}
