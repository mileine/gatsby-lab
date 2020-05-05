import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image' 

const NotFoundPage = () => {
  const { notFoundImg } = 
  useStaticQuery(
    graphql`
      query {
        notFoundImg: file(relativePath: { eq: "undraw_not_found_60pq.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return <Layout>
    <SEO title="404: Not found" />
    <Img
        fluid={notFoundImg.childImageSharp.fluid}
        alt="Oops... nada aqui!"
        />
    <p>Oops! Nada por aqui...</p>
  </Layout>
}

export default NotFoundPage