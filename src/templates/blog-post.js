import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import { MainContent } from '../styles/base'
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import getThemeColor from "../utils/getThemeColor"
import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image}/>
      <S.PostHeader>
        <S.PostTag background={post.frontmatter.background} cover
            bg={getThemeColor()} direction="left"
            duration={0.6}
            to={'/categories/' + post.frontmatter.category}
            activeClassName="active">{post.frontmatter.category}</S.PostTag>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <MainContent>
        <S.PostContent>
          <MDXRenderer>{post.body}</MDXRenderer>
        </S.PostContent>
      </MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        background
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        category
      }
      body
      timeToRead
    }
  }
`

BlogPost.propTypes = {
  background: PropTypes.string,
  category: PropTypes.string
}
export default BlogPost