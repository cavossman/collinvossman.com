const path = require(`path`);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async (gatsbyUtilities) => {
  const pages = await getPages(gatsbyUtilities);
  if (pages.length) {
    await createBlogPages({ pages, gatsbyUtilities });
  }
};

const getPages = async ({ graphql, reporter }) => {
  const graphqlResult = await graphql(`
    query StrapiPages {
      allStrapiPages(sort: { fields: published_at }) {
        pages: nodes {
          id
          slug
          isFrontPage
        }
      }
    }
  `);

  // throwGatsbyError(graphqlResult, reporter, 'pages');

  return graphqlResult.data.allStrapiPages.pages;
};

const createBlogPages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map((page) =>
      gatsbyUtilities.actions.createPage({
        path: page.isFrontPage ? '/' : page.slug,
        component: page.isFrontPage
          ? path.resolve(`./src/templates/front-page.tsx`)
          : path.resolve(`./src/templates/single-page.tsx`),
        context: {
          id: page.id,
        },
      }),
    ),
  );
