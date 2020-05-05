import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <MainContent>
      <h1>Sobre este blog</h1>
      
      <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/share/101QMeB0oSeVtQ/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando Gatsby. Foi bem divertido e pude aprender também um pouco sobre:</p>

      <ul>
        <li>GraphQL</li>
        <li>Algolia</li>
        <li>Netlify</li>
        <li>Netlify CMS</li>
        <li>ReactJS</li>
        <li>CSS-in-JS</li>
        <li>Boas práticas em desenvolvimento web</li>
      </ul>

      <p>Meu objetivo é transformá-lo num blog pessoal, customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo. =)</p>
      
      <p>A ideia inicial era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando bastante em conceitos muito básicos. Por isso, resolvi dar um passo para trás trabalhar em cima do projeto do curso.</p>

      <blockquote>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</blockquote>

     
    </MainContent>
  </Layout>
)

export default AboutPage