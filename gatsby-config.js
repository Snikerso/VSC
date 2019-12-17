module.exports = {
  pathPrefix: "/VSC",
}

module.exports = {

  siteMetadata: {
    title: `Visual Spatial Cognition`,
    description: `This is page about eyetracking in Toruń`,
    author: `Snikers & Sio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/LOGO-EYE-4.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "PERSONS",
        // This is field under which it's accessible
        fieldName: "persons",
        // Url to query from
        url: "https://api-euwest.graphcms.com/v1/ck36zruz51vb101cw0jf62wbv/master",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
