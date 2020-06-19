import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import * as S from "../components/ListWrapper/styled"

const PostListWork = props => {
  const postListWork = props.data.allMdx.edges

  return (
    <Layout>
      <SEO title="Work"/>
      <S.ListInfo>Todos os posts em: "Tech"</S.ListInfo>
      <S.ListWrapper>
        {postListWork.map(
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
  query PostListWork{
    allMdx (
      filter: {
        frontmatter: { published: { eq: true }, type: { in: "work" } }
      }
      sort: { fields: frontmatter___date, order: DESC} 
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

export default PostListWork
