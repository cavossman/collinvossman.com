module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: ['posts', 'pages', 'projects'],
        queryLimit: 1000,
      },
    },
  ],
};
