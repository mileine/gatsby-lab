import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <MainContent>
      <h1> About this blog</h1>
      <p>This blog was developed during a <a href="https://www.udemy.com/share/101QMeB0oSeVtQ/">Gatsby course</a> I took by  <a href="https://willianjusten.com.br/">Willian Justen.</a> In this course, he teaches - step by step - how to create a blog just like his using Gatsby. I had a lot of fun as I learned a lot about many different topics such as:</p>

      <ul>
        <li>GraphQL</li>
        <li>Algolia</li>
        <li>Netlify</li>
        <li>Netlify CMS</li>
        <li>Web development best practices</li>
      </ul>

      <p>Now my goal is to turn this blog into my personal blog by customizing the layout and adding/removing some features as I keep learning. =) </p>

      <blockquote>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</blockquote>
     
    </MainContent>
  </Layout>
)

export default AboutPage