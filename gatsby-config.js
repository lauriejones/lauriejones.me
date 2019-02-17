module.exports = {
  siteMetadata: {
    title: 'Laurie Jones',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43134098-1"
      }
    }
  ]
};
