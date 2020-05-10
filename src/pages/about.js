import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'

const AboutPage = () => (<Layout>
    <MainContent>
    <SEO title="About"/>
        <h1>Sobre</h1>

        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>. Super recomendo! \o/</p>

        <p>Terminado o curso, agora ideia inicial era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando bastante em conceitos muito básicos. Acabei passando muito tempo travada na frente do computador sem evoluir nada - e isso não é o jeito mais motivante de aprender coisas novas depois de um dia de trabalho. Acabei desanimando.</p>

        <p>Depois de uma longa pausa, retomei a ideia do blog. Mas, desta vez, voltando para trabalhar a partir do projeto final do curso: customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo.</p>

        <p>Percebi que essa abordagem foi certa quando me vi passando o fim de semana todo trabalhando nas primeiras customizações sem ver o tempo passar. <a href="https://pt.wikipedia.org/wiki/Fluxo_(psicologia)">Estado de Flow</a> total. =)</p>

        <blockquote><p>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</p></blockquote>

        <hr/>

        <p>Obs.: Sobre conteúdo, meu objetivo é fazer deste blog minha biblioteca pessoal de referências. Um lugar para centralizar palestras, artigos e anotações. Mas esse é um ponto que vou organizando aos poucos. Por enquanto, estou apenas populando o blog com posts "rascunhos" para validar layout e testar plugins. A prioridade neste momento é aprender sobre Gatsby e tecnologias envolvidas. ;) </p>

    </MainContent>
  </Layout>
)

export default AboutPage