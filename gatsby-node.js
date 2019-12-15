const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const uslugiTemplate = path.resolve(`src/templates/aktualnosci-post.js`)
  // Query for markdown nodes to use in creating pages.
  const uslugiQuery = await graphql(
    `
{
  persons
   {
     aktualnoscisConnection
         {
            edges {
              node {
                title
                slug
              }
              }
            }
          }
        }

 ` )

  uslugiQuery.data.naszeuslugi.uslugi.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: uslugiTemplate,
      context: {
        data: post.node,
      }
    })
  })

}