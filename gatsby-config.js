module.exports = {
    siteMetadata: {
        title: `Adeniyi Portfolio`,
        description: `Personal portfolio built with Gatsby`,
        author: `@adeniyi`,
        siteUrl: `https://niyi.com.ng`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Adeniyi Portfolio`,
                short_name: `Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#02aab0`,
                display: `standalone`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
