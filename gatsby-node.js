const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const AktualnosciTemplate = path.resolve(`src/templates/aktualnosci-post.js`)
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

  uslugiQuery.data.persons.aktualnoscisConnection.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: AktualnosciTemplate,
      context: {
        data: post.node,
      }
    })
  })

}