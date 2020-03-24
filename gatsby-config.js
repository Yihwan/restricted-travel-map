module.exports = {
  siteMetadata: {
    title: `Restricted Travel Map`,
    description: `A map that shows global travel restrictions caused by COVID-19 (coronavirus).`,
    author: `@yihwan`,
    url: `https://restrictedtravelmap.com`,
    image: "/images/homeTimes.jpg", 
    twitterUsername: '@yihwan',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `countries`,
        path: `${__dirname}/src/data/countries`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-remark`,
  ],
}
