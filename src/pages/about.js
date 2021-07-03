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
        
        <p>Este blog foi desenvolvido durante <a href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/">o curso de Gatsby</a> que fiz pela Udemy com o instrutor <a href="https://willianjusten.com.br/">Willian Justen.</a> Ali ele ensina passo-a-passo como criar um blog igual ao dele utilizando <a href="https://www.gatsbyjs.org/">Gatsby</a>.</p> 
        
        <p>Recomendo muito e falo um pouquinho mais sobre o curso <a href="/curso-gatsby/">aqui</a>.</p>

        <h2>Quem escreve?</h2>

        <p><a href="https://www.linkedin.com/in/mileinesouto/">Mileine</a> - ou Mi. O que for mais fácil lembrar. =)</p>

        <p>Escrevo para manter minha biblioteca de referências pessoal e registrar aprendizados, inspirada pela ideia de <a href="https://vidaorganizada.com/2017/08/17/commonplace-books/">commonplace books</a> que aprendi com a Thais Godinho, autora do blog <a href="https://vidaorganizada.com/">Vida Organizada:</a></p>

        <blockquote><i>Commonplace books são basicamente livros ou cadernos criados por uma pessoa onde ela anota ou registra trabalhos de outros, porém com suas próprias palavras, junto com observações pessoais de aprendizado. São basicamente uma maneira de agrupar conhecimento “pessoal” usando um mesmo caderno, até acabar, sobre variados assuntos. <a href="https://vidaorganizada.com/2017/08/17/commonplace-books/">[Link]</a></i></blockquote>
      </S.LayoutMainContent>
    </MainContent>
  </Layout>
)}

export default AboutPage