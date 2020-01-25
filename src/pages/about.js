import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <MainContent>
      <h1> About this blog</h1>
      <p>This blog was developed during a Gatsby course I took by  <a href="https://willianjusten.com.br/" target="_blank">Willian Justen.</a></p>

      <p>You can check it at Udemy: <a href="https://www.udemy.com/share/101QMeB0oSeVtQ/" target="_blank">Crie um site PWA com React, GraphQL e Netlify CMS.</a></p>

      <p>In this course, he teaches - step by step - how to create a blog just like his using Gatsby.</p>

      <p>I first heard about Gatsby on a post by  <a href="https://www.taniarascia.com/" target="_blank">Tania Rascia</a>. I was so curious about what this Gatsby thing was that I had to look it up. That's when I found Willian's course. And I loved it!</p>

      <p>There's still so much to learn, so I'm using this project to keep practicing topics from the course such as:</p>

      <ul>
        <li>GraphQL</li>
        <li>Algolia</li>
        <li>Netlify</li>
        <li>Netlify CMS</li>
        <li>Web development best practices</li>
      </ul>

      <p>P.S.: I'm also using this blog to practice English. That's why you might have found a couple of mistakes or weird sentences here and there... I hope I'll get better by the time I finish playing with this project. =) </p>

    </MainContent>
  </Layout>
)

export default AboutPage