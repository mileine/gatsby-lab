import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import * as S from "../components/ListWrapper/styled"
import PropTypes from "prop-types"

const PostListCategory = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } em "${category}"`

  return (
    <Layout>
      <SEO title="Work"/>
      <h1>{tagHeader}</h1>
      <S.ListWrapper>
        {edges.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <S.ListItem>
              <PostItem
                slug={slug}
                background={background}
                category={category}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
              />
            </S.ListItem>
          )
        )}
      </S.ListWrapper>
    </Layout>
  )
}

PostListCategory.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default PostListCategory

export const query = graphql`
  query($category: String) {
    allMdx (
      filter: {
        frontmatter: { published: { eq: true }, category: { in: [$category] } }
      }
      sort: { fields: frontmatter___date, order: DESC} 
    ) {
      totalCount,
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
          }
          timeToRead
        }
      }
    }
  }
`

