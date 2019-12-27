const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const aktualnosciTemplate = path.resolve(`src/templates/aktualnosci-post.js`)
  // Query for markdown nodes to use in creating pages.
  const AktualnosciQuery = await graphql(
    `
{
  persons
   {
     aktualnoscis: aktualnoscisConnection(first:100)
         {
            edges {
              node {
                title
                slug
                data
                content
                cnjdsn
                photo{
                  url
                }
              }
              }
            }
          }
        }

 ` )

  AktualnosciQuery.data.persons.aktualnoscis.edges.forEach(post => {
    createPage({
      path: post.node.slug,
      component: aktualnosciTemplate,
      context: {
        data: post.node,
      }
    })
  })

}