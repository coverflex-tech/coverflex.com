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
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-XXXXXXXXX-X",
    //   },
    // },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_PRODUCTION_WRITE_KEY || `SEGMENT_PRODUCTION_WRITE_KEY`,
        devKey: process.env.SEGMENT_DEV_WRITE_KEY || `SEGMENT_DEV_WRITE_KEY`,
        trackPage: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     id: `YOUR_HOTJAR_ID`,
    //     sv: `YOUR_HOTJAR_SNIPPET_VERSION`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `pt`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     exclude: ["/signin", `/signed-up`],
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }

    //         allSitePage {
    //           edges {
    //             node {
    //               path
    //             }
    //           }
    //         }
    //     }`,
    //     serialize: ({ site, allSitePage }) =>
    //       allSitePage.edges.map(edge => {
    //         return {
    //           url: site.siteMetadata.siteUrl + edge.node.path,
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         }
    //       })
    //   }
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
