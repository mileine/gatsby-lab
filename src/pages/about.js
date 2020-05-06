import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'
import Img from 'gatsby-image' 

const AboutPage = () => {
  const { aboutImg } = 
  useStaticQuery(
    graphql`
      query {
        aboutImg: file(relativePath: { eq: "undraw_flowers_vx06.png"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return <Layout>
    <MainContent>
    <SEO title="About"/>
      <Img
        fluid={aboutImg.childImageSharp.fluid}
        alt="Flower - Illustration by undraw.co"
        />
        <h1>Sobre</h1>

        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>. Super recomendo! \o/</p>
        
        <p>Foi bem divertido e pude aprender também um pouco sobre novas tecnologias:</p>

        <ul>
          <li>Gatsby - um (baita) framework gerador de sites estáticos baseado em React</li>
          <li>GraphQL - para busca de dados</li>
          <li>Algolia - para busca de conteúdo</li>
          <li>Netlify - para deploy do seu código direto do github e hospedagem</li>
          <li>Netlify CMS - para você escrever seus posts (já q o projeto final é um blog). Você escreve o post em markdown e quando salva ele manda um pull request para seu repositório no github (LINDO!).</li>
        </ul>

        <p>E algumas práticas em desenvolvimento web:</p>
        <ul>
          <li>CSS-in-JS</li>
          <li>PWA</li>
          <li>Componentização em React</li>
          <li>Boas práticas em desenvolvimento web</li>
        </ul>

        <p>A ideia inicial era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando bastante em conceitos muito básicos. Acabei passando muito tempo travada na frente do computador sem evoluir nada - e isso não é o jeito mais motivante de se estudar depois de um dia de trabalho. Acabei desanimando.</p>

        <p>Depois de uma longa pausa, retomei a ideia do blog. Mas agora voltando para trabalhar no projeto final do curso: customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo.</p>

        <p>Percebi que essa abordagem foi certa quando me vi passando o fim de semana todo trabalhando nas primeiras customizações sem ver o tempo passar. <a href="https://pt.wikipedia.org/wiki/Fluxo_(psicologia)">Estado de Flow</a> total. =)</p>

        <blockquote>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</blockquote>

        <hr/>

        <p>Obs.: Sobre conteúdo, meu objetivo é fazer deste blog minha biblioteca pessoal de referências. Um lugar para centralizar palestras, artigos, notas de cursos, etc. Mas esse é um ponto que vou organizando aos poucos, pois a prioridade é aprender sobre Gatsby. ;) </p>

    </MainContent>
  </Layout>
}

export default AboutPage