import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import * as S from "../components/ListWrapper/styled"

const Personal = props => {
  const postListPersonal = props.data.allMdx.edges

  return (
    <Layout>
      <SEO title="Personal"/>
      <S.ListWrapper>
        {postListPersonal.map(
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

export const query = graphql`
  query Personal($limit: Int!) {
    allMdx (
      filter: {
        frontmatter: { published: { eq: true }, type: { in: "personal" } }
      }
      sort: { fields: frontmatter___date, order: DESC} 
      limit: $limit
    ) {
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

export default Personal
