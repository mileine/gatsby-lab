import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'

const AboutPage = () => (<Layout>
    <MainContent>
    <SEO title="About"/>
        <h1>Sobre</h1>

        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>. Recomendo muito e falo um pouquinho mais sobre o curso <a href="/curso-gatsby/">aqui</a>.</p>

        <p>Terminado o curso, a era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando em conceitos muito básicos. Acabei passando muito tempo travada na frente do computador sem evoluir nada - e isso não é o jeito mais motivante de aprender coisas novas depois de um dia de trabalho. Acabei desanimando.</p>

        <p>Depois de uma longa pausa, retomei a ideia do blog. Desta vez, voltando para trabalhar a partir do projeto final do curso: customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo.</p>

        <p>Percebi que essa abordagem foi certa quando me vi passando o fim de semana todo trabalhando nas primeiras customizações sem ver o tempo passar. <a href="https://pt.wikipedia.org/wiki/Fluxo_(psicologia)">Estado de Flow</a> total. =)</p>

        <blockquote><p>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</p></blockquote>

        <hr/>

        <p>Obs.: Sobre conteúdo, meu objetivo é fazer deste blog meu caderno digital. Um lugar para centralizar referências de links, palestras, cursos, artigos e anotações sobre os assuntos que mais me interessam: tecnologias front-end, desenvolvimento de software, design, aprendizado de idiomas, bem-estar e música. Tenho muita informação espalhada em evernote, e-mails, whatsapp, playlists do Youtube e blogs antigos. Além disso, tenho sentido falta de ter uma plataforma para documentar aprendizados e experiências, especialmente na área de front-end. O Gatsby caiu como uma luva para uma necessidade antiga. Por permitir "salvar" o conteúdo offline (PWA), ele realmente funciona como um caderno digital. Mas o conteúdo eu vou organizando e refinando aos poucos. Por enquanto, estou apenas populando o blog com posts em versão "rascunho" para validar layout e testar plugins. A prioridade neste momento é aprender sobre Gatsby e tecnologias relacionadas. 加由！加由！</p>

    </MainContent>
  </Layout>
)

export default AboutPage