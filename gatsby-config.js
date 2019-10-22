/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Coverflex",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: `SEGMENT_PRODUCTION_WRITE_KEY`,
        devKey: `SEGMENT_DEV_WRITE_KEY`,
        trackPage: false,
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: `YOUR_HOTJAR_ID`,
        sv: `YOUR_HOTJAR_SNIPPET_VERSION`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
  ],
}
