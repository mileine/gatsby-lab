const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "Mdx") {
    // Use `createFilePath`to turn markdown files in our `data/faqs`directory into `/faqs/slug
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField ({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx (
        filter: {
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }){
        edges {
          node {
            fields{
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD/MM/YYYY")
              description
              title
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMdx.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const postsPerPage = 2000
    const numPages = Math.ceil(posts.length / postsPerPage)
  
    Array.from({ length: numPages }).forEach((_, index1) => {
      createPage ({
        path: index1 === 0 ? `/`: `/page/${index1 + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
      })
    })
    Array.from({ length: numPages }).forEach((_, index2) => {
      createPage ({
        path: index2 === 0 ? `personal/`: `/page/${index2 + 1}`,
        component: path.resolve(`./src/templates/blog-list-personal.js`),
      })
    })
    Array.from({ length: numPages }).forEach((_, index3) => {
      createPage ({
        path: index3 === 0 ? `work/`: `/page/${index3 + 1}`,
        component: path.resolve(`./src/templates/blog-list-work.js`),
      })
    })
  })
}