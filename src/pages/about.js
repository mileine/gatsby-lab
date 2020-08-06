import React from 'react' 
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from '../styles/base'
import * as S from "../components/Layout/styled"

const AboutPage = () => {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  }
  return (
  <Layout>
    <MainContent>
    <SEO title="About"/>
      <S.LayoutMainContent>
        <h1>Sobre este blog</h1>
        
        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>. Recomendo muito e falo um pouquinho mais sobre o curso <a href="/curso-gatsby/">aqui</a>.</p>

        <p>Terminado o curso, a era criar um blog completamente do zero. Mas, depois de um tempo tentando, percebi que estava patinando em conceitos muito básicos. Acabei passando muito tempo travada na frente do computador sem evoluir nada - e isso não é o jeito mais motivante de aprender coisas novas depois de um dia de trabalho. Acabei desanimando.</p>

        <p>Depois de uma longa pausa, retomei a ideia do blog. Desta vez, voltando para trabalhar a partir do projeto final do curso: customizando layout, design, adicionando/removendo componentes, enquanto continuo aprendendo.</p>

        <p>Percebi que essa abordagem foi certa quando me vi passando o fim de semana todo trabalhando nas primeiras customizações sem ver o tempo passar. <a href="https://pt.wikipedia.org/wiki/Fluxo_(psicologia)">Estado de Flow</a> total.</p>

        <blockquote><p>"learning is hard, and it's humbling" ( <a href="https://css-tricks.com/learning-to-learn/">Learning to learn, by Sarah Drasner</a>)</p></blockquote>

        <h2>Quem escreve?</h2>

        <p><a href="https://www.linkedin.com/in/mileinesouto/">Mileine</a> - ou Mi. O que for mais fácil lembrar. =)</p>

        <p>Sou Analista de Software, direcionando minha carreira para desenvolvimento Frontend. Das diferentes áreas em que já trabalhei em TI, construir interfaces para web é - de loooonge - minha favorita.
        </p>

        <p>Meu gosto por construir UIs para web também tem me levado a buscar conhecimentos na área de Design, outro tema que aparecerá com frequência por aqui.</p>

        <p>Por isso, escrevo para guardar e compartilhar boas referências de cursos, palestras, artigos em Frontend e Design.</p>

        <p>Escrevo também para registrar aprendizados em Frontend, porque sei que cada "não sei nem por onde começar" que se torna um "consegui!" serve como combustível para seguir em frente e continuar trabalhando - feliz. 😊❤️</p>

      </S.LayoutMainContent>
    </MainContent>
  </Layout>
)}

export default AboutPage