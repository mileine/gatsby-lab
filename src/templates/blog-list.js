import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import * as S from "../components/ListWrapper/styled"

const BlogList = props => {
  const postList = props.data.allMdx.edges

  return (
    <Layout>
      <SEO title="Home"/>
      <S.ListInfo>Todos os posts do blog em: "Tech" e "Pessoal"</S.ListInfo>
      <S.ListWrapper>
        {postList.map(
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
  query PostList {
    allMdx (
      filter: {
        frontmatter: { published: { eq: true } }
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

export default BlogList