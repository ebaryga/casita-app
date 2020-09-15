module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        // whitelistPatterns: [/^slick-/],
      },
    },
    'gatsby-plugin-react-leaflet',
  ],
};
